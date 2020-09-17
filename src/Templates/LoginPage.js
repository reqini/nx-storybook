import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HeaderLogin from "Components/2020/HeaderLogin/HeaderLogin";
import Keyboard from "Components/Organisms/Keyboard/keyboard";
import LoginForm from "Components/Organisms/Login/LoginForm";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: 1280,
    height: 720,
    flexFlow: "column",
    justifyContent: "space-between",
  },
  keyboard: {
    width: "100%",
    background: "#212224",
    alignSelf: "flex-end",
  },
  formContainer: {
    display: "flex",
    height: "100%",
    alignSelf: "center",
    alignItems: "flex-start",
    marginTop: 42,
  }
}));

const LoginPage = () => {
  const classes = useStyles({})
  return (
    <div className={`login ${classes.container}`}>
      <div className={classes.formContainer}>
        <HeaderLogin />
        <LoginForm />
      </div>
      <div className={classes.keyboard}>
        <Keyboard />
      </div>
    </div>
  );
};
export default LoginPage;