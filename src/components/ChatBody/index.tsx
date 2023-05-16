import { FormEvent, useEffect, useState } from "react";
import { ChatProps, Message } from "../../utils/types";
import { ChatDialog } from "../ChatDialog";
import { sendMessage } from "../../services/sendMessage";
import { receiveMessage } from "../../services/receiveMessage";
import styles from "./ChatBody.module.css";
import { deleteNotification } from "../../services/deleteNotifications";

export const ChatBody = ({
  phoneNumber,
  idInstance,
  apiTokenInstance,
}: ChatProps) => {
  const [enteredMessage, setEnteredMessage] = useState<string>("");
  const [messages, setMessages] = useState<Array<Message>>([]);

  const getNotification = async () => {
    const receiveMessageData = await receiveMessage(
      idInstance,
      apiTokenInstance
    );

    console.log(receiveMessageData);

    if (receiveMessageData) {
      const message: Message = {
        sender: receiveMessageData.senderData.sender,
        text: receiveMessageData.messageData.extendedTextMessageData.text,
        timeStamp: receiveMessageData.timeStamp,
      };

      if (
        !messages.filter((item) => item.timeStamp === message.timeStamp).length
      ) {
        setMessages((currMessages) => [...currMessages, message]);

        await deleteNotification(
          idInstance,
          apiTokenInstance,
          receiveMessageData.idMessage
        );
      }

      return;
    }

    return;
  };

  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message: Message = {
      sender: "Me",
      text: enteredMessage,
      timeStamp: new Date().getTime(),
    };

    const requestBody = {
      chatId: `${phoneNumber}@c.us`,
      message: enteredMessage,
    };

    await sendMessage(idInstance, apiTokenInstance, requestBody);

    setMessages((currMessages) => [...currMessages, message]);
    setEnteredMessage("");
  };

  useEffect(() => {
    const receiveMsgInterval = setInterval(() => {
      if (idInstance && apiTokenInstance) {
        getNotification();
      }
    }, 5000);
    return () => clearInterval(receiveMsgInterval);
  });

  return (
    <div className={styles.chat__body}>
      <div className={styles.chat__header}>
        <p>{phoneNumber}</p>
      </div>
      <div className={styles.chat__content}>
        <div className={styles.chat__message}>
          {messages.map((message, index) => (
            <ChatDialog key={index} message={message} />
          ))}
        </div>
        <form onSubmit={(e) => handleSendMessage(e)}>
          <textarea
            className={styles.chat__enter_message}
            onChange={(e) => setEnteredMessage(e.target.value)}
            value={enteredMessage}
          />
          <button className={styles.chat__send_message} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
