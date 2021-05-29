import "./App.css";
import { useEffect } from "react";
import { SocketClient } from "@cognigy/socket-client";
import ChatBootUi from "./components/ChatBootUi/ChatBootUi";
import { useSelector, useDispatch } from "react-redux";
import { allMessages, storeBotMessage, storeUserMessage } from "./redux/actions/index";

function App() {
  const myState = useSelector((state) => state.messagesList);
  const dispatch = useDispatch();

  console.log(myState);

  const client = new SocketClient(
    "https://endpoint-trial.cognigy.ai",
    "7eebd3c716a9c4681d1e7db078ac0dae4bba03e282a902372fa0b4a12537d26e",
    {
      forceWebsockets: true,
      reconnection: true,
    }
  );

  const getBot = async () => {
    try {
      client.on("output", (output) => {
        const {text } = output;
        dispatch(storeBotMessage(text));
      });

      await client.connect();
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessageNow = async (inputText) => {
    try {
      console.log(inputText);
      dispatch(storeUserMessage(inputText));
      await getBot();
      client.sendMessage(inputText || alert('something went wrong'));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(client);
  });

  return (
    <section className="App">
      <h1 style={{ fontSize: "60px" }} onClick={() => dispatch(allMessages())}>
        Imran ChatBot
      </h1>
      <div>
        <ChatBootUi sendMessageNow={sendMessageNow} />
      </div>
    </section>
  );
}

export default App;
