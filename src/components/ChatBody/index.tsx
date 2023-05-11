import { ChatDialog } from "../ChatDialog";

export const ChatBody = () => {
  return (
    <div>
      <ChatDialog />

      <div className="container darker">
        <img src="/w3images/avatar_g2.jpg" alt="Avatar" className="right" />
        <p>Hey! I'm fine. Thanks for asking!</p>
        <span className="time-left">11:01</span>
      </div>

      <div className="container">
        <img src="/w3images/bandmember.jpg" alt="Avatar" />
        <p>Sweet! So, what do you wanna do today?</p>
        <span className="time-right">11:02</span>
      </div>

      <div className="container darker">
        <img src="/w3images/avatar_g2.jpg" alt="Avatar" className="right" />
        <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
        <span className="time-left">11:05</span>
      </div>
    </div>
  );
};
