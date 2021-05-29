import "./App.css";
import { useEffect, useState } from "react";
import { SocketClient } from "@cognigy/socket-client";
import ChatBootUi from "./components/ChatBootUi/ChatBootUi";

function App() {
  const [userMessage, setUserMessage] = useState([
    { source: "bot", text: "Hello M.R Chris, How are you?" },
  ]);

  const [typedMessage, setTypedMessage] = useState({});

  const client = new SocketClient(
    "https://endpoint-trial.cognigy.ai",
    "7eebd3c716a9c4681d1e7db078ac0dae4bba03e282a902372fa0b4a12537d26e",
    {
      forceWebsockets: true,
      reconnection: true,
    }
  );

  const getBot = async (inputValue) => {
    try {
      client.on("output", (output) => {
        console.log(output);
        const { source, text } = output;
        inputValue?.text &&
          setUserMessage([...userMessage, { ...inputValue }, { source, text }]);
      });

      await client.connect();

    } catch (error) {
      console.log(error);
    }
  };

  const sendMessageNow = async (inputText) => {
    try {
      console.log(inputText);
      setUserMessage([...userMessage, { ...inputText }]);
      await getBot(inputText);
      client.sendMessage(inputText.text || "hello");
    } catch (error) {}
  };

  useEffect(() => {
    console.log(client);
    console.log(userMessage);
    console.log(typedMessage);
  });

  return (
    <section className="App">
      <h1 style={{ fontSize: "60px" }}>Imran ChatBot</h1>
      <div>
        <ChatBootUi
          userMessage={userMessage}
          sendMessageNow={sendMessageNow}
          setTypedMessage={setTypedMessage}
        />
      </div>
    </section>
  );
}

export default App;