import s from "./ChatSideBar.module.css";
import { ChatDialog } from "../ChatDialog";

export const ChatSideBar = () => {
  return (
    <div className={s.chat__sidebar}>
      <ChatDialog />
    </div>
  );
};
