import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid, Input, InputAdornment, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
// https://www.freecodecamp.org/news/design-imessage-like-chat-bubble-react-native/
const useStyles = makeStyles({
  root: {
    background: "#f1f1f1",
    maxWidth: 450,
    height: 600,
    margin: "0 auto",
    fontSize: 14,
    position: "relative",
    overflowY: "scroll",
  },
  bot: {
    display: "inline-block",
    textAlign: "left",
    background: "red",
    margin: "10px 0",
    padding: "10px",
    borderRadius: "10px",
  },
  user: {
    display: "inline-block",
    textAlign: "right",
    background: "green",
    margin: "10px 0",
    padding: "10px",
    borderRadius: "10px",
  },
  messageForm: {
    width: 450,
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  messageInput: {
    width: "100vw",
    maxWidth: 370,
    margin: "0 auto",
    padding: "10px",
  },
  iconSize: {
    width: 50,
    height: 50,
  },
  alignRight: {
    textAlign: "right",
  },
  alignLeft: {
    textAlign: "left",
  },
});

const ChatBootUi = ({ userMessage, sendMessageNow,setTypedMessage }) => {
  const classes = useStyles();

  const inputValue = useRef();

  const testFunc = (value) => {
    // setTypedMessage({ source: "user", text: value });
    sendMessageNow({ source: "user", text: value })
  };

  const userMsgHandler = () => {
    const value = inputValue.current.value;
    value === "" ? alert("Please Type Message Boss") : testFunc(value);
    inputValue.current.value = "";
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {userMessage.length !== 0 &&
              userMessage.map((msg) => {
                const { source, text } = msg;
                return (
                  <div
                    className={
                      source === "user" ? classes.alignRight : classes.alignLeft
                    }
                  >
                    <span
                      className={source === "user" ? classes.user : classes.bot}
                    >
                      {text}
                    </span>
                  </div>
                );
              })}
          </Typography>
        </CardContent>
      </Card>
      <div className={classes.messageForm}>
        <Grid container alignItems="center">
          <Grid item>
            <input
              className={classes.messageInput}
              id="input-with-icon-grid"
              label="Type Message"
              ref={inputValue}
              onKeyPress={(e) => e.key === "Enter" && userMsgHandler()}
              placeholder="Type Message"
            />
          </Grid>
          <Grid item>
            <SendIcon
              className={classes.iconSize}
              onClick={() => userMsgHandler()}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ChatBootUi;
