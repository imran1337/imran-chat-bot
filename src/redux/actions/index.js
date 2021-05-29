export const allMessages = (myObj) => ({
  type: "ALL_MESSAGES",
  payload: myObj,
});

export const storeUserMessage = (text) => ({
  type: "STORE_USER_MESSAGE",
  payload: {
    source: "user",
    text,
  },
});

export const storeBotMessage = (text) => ({
  type: "STORE_BOT_MESSAGE",
  payload: {
    source: "bot",
    text,
  },
});

export const sendMessage = () => ({ type: "SEND_MESSAGE" });
