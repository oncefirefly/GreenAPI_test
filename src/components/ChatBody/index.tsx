import { FormEvent, useEffect, useState } from "react";
import { ChatProps } from "../../utils/types";
import { ChatDialog } from "../ChatDialog";
import { sendMessage } from "../../services/sendMessage";
import { receiveMessage } from "../../services/receiveMessage";
import styles from "./ChatBody.module.css";

export const ChatBody = ({
  phoneNumber,
  idInstance,
  apiTokenInstance,
}: ChatProps) => {
  const [enteredMessage, setEnteredMessage] = useState<string>("");
  // const [messages, setMessages] = useState([]);

  const getNotification = async () => {
    const receiveMessageRes = await receiveMessage(
      idInstance,
      apiTokenInstance
    );

    console.log(receiveMessageRes);
  };

  useEffect(() => {
    const receiveMsgInterval = setInterval(() => {
      getNotification();
    }, 5000);
    return () => clearInterval(receiveMsgInterval);
  });

  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requestBody = {
      chatId: `${phoneNumber}@c.us`,
      message: enteredMessage,
    };

    const sendMessageRes = await sendMessage(
      idInstance,
      apiTokenInstance,
      requestBody
    );

    setEnteredMessage("");
    console.log(sendMessageRes);
  };

  return (
    <div className={styles.chat__body}>
      <div>
        <p>{phoneNumber}</p>
      </div>
      <ChatDialog />
      <ChatDialog />
      <ChatDialog />
      <ChatDialog />
      <form onSubmit={(e) => handleSendMessage(e)}>
        <textarea
          onChange={(e) => setEnteredMessage(e.target.value)}
          value={enteredMessage}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
