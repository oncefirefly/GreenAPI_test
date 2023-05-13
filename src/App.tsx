// react
import { useEffect, useState } from "react";

// components
import { ChatSideBar } from "./components/ChatSideBar";
import { ChatBody } from "./components/ChatBody";
import { InstaceModal } from "./components/InstanceModal";

// styles
import "./App.css";

function App() {
  // states
  const [idInstance, setIdInstance] = useState<string>("");
  const [apiTokenInstance, setApiTokenInstance] = useState<string>("");

  useEffect(() => {
    console.log(idInstance, apiTokenInstance);
  }, [idInstance, apiTokenInstance]);

  return (
    <div className="App">
      <ChatSideBar />
      <ChatBody />
      <InstaceModal
        title="Enter idInstance and apiTokenInstance"
        setIdInstance={setIdInstance}
        setApiTokenInstance={setApiTokenInstance}
      />
    </div>
  );
}

export default App;
