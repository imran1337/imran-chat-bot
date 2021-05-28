import "./App.css";
import { useEffect } from "react";
import { SocketClient } from "@cognigy/socket-client";
import ChatBootUi from "./components/ChatBootUi/ChatBootUi";

function App() {
  return (
    <div className="App">
      <h1>My ChatBoot</h1>
      <ChatBootUi />
    </div>
  );
}

export default App;
