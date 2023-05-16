import { ChatDialogProps } from "../../utils/types";
import styles from "./ChatDialog.module.css";

export const ChatDialog = ({ message }: ChatDialogProps) => {
  return (
    <div className={styles.chat__dialog}>
      <p className={styles.chat__sender}>{message.sender}</p>
      <p className={styles.chat__text_blob}>{message.text}</p>
    </div>
  );
};
