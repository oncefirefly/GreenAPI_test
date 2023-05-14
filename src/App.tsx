// react
import { useState } from "react";

// components
import { ChatBody } from "./components/ChatBody";
import { InstaceModal } from "./components/InstanceModal";

// styles
import "./App.css";
import { PhoneNumberModal } from "./components/PhoneNumberModal";

function App() {
  // states
  const [instanceModalIsOpen, setInstanceModalIsOpen] = useState<boolean>(true);
  const [phoneModalIsOpen, setPhoneNumberIsOpen] = useState<boolean>(false);
  const [idInstance, setIdInstance] = useState<string>("");
  const [apiTokenInstance, setApiTokenInstance] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <div className="App">
      <ChatBody
        phoneNumber={phoneNumber}
        idInstance={idInstance}
        apiTokenInstance={apiTokenInstance}
      />
      <InstaceModal
        isOpen={instanceModalIsOpen}
        onClose={() => {
          setInstanceModalIsOpen(false);
          setPhoneNumberIsOpen(true);
        }}
        title="Enter idInstance and apiTokenInstance"
        setIdInstance={setIdInstance}
        setApiTokenInstance={setApiTokenInstance}
      />
      <PhoneNumberModal
        isOpen={phoneModalIsOpen}
        onClose={() => setPhoneNumberIsOpen(false)}
        title="Enter phone number"
        setPhoneNumber={setPhoneNumber}
      />
    </div>
  );
}

export default App;
