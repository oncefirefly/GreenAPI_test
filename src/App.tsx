import "./App.css";
import { ChatSideBar } from "./components/ChatSideBar";
import { ChatBody } from "./components/ChatBody";

function App() {
  return (
    <div className="App">
      <ChatSideBar />
      <ChatBody />
    </div>
  );
}

export default App;
