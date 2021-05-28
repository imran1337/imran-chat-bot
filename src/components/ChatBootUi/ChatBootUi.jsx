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
  },
  bot: {
    display: "block",
    textAlign: "left",
  },
  user: {
    display: "block",
    textAlign: "right",
  },
  messageForm: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    alignItems: "center",
  },
  messageInput: {
    width: "400px",
  },
});

const ChatBootUi = () => {
  const classes = useStyles();

  const [userMessage, setUserMessage] = useState([]);
  const inputValue = useRef();

  const userMsgHandler = () => {
    const value = inputValue.current.value;
    value === ""
      ? alert("Please add some value")
      : setUserMessage([...userMessage, value]);
    inputValue.current.value = "";
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {userMessage !== 0 &&
              userMessage.map((msg) => (
                <span className={classes.user}> {msg}</span>
              ))}
          </Typography>
          <Typography variant="h5" component="h2">
            <span className={classes.bot}>Hi There</span>
          </Typography>
        </CardContent>
        <CardActions>
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
                <SendIcon onClick={userMsgHandler} />
              </Grid>
            </Grid>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default ChatBootUi;
