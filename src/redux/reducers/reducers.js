const initialState = [{ source: "bot", text: "Hello M.R Chris, How are you?" }];

const messagesList = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_MESSAGES":
      return state;

    case "STORE_USER_MESSAGE":
      return [...state, { ...action.payload }];

    case "STORE_BOT_MESSAGE":
      return [...state, { ...action.payload }];

    default:
      return state;
  }
};

export default messagesList;
