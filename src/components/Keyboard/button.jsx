import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    background: "transparent",
    boxSizing: "border-box",
    color: "#fff",
    fontSize: "25px",
    float: "left",
    textAlign: "center",
    textDecoration: "none",
  },
}));

const KeyboardButton = ({
  onClick = () => {},
  isTop = false,
  isDisabled = false,
  dataSnDown = null,
  value = "",
  className = "",
}) => {
  const classes = useStyles();

  const handleClick = (e) => {
    e.preventDefault();
    onClick(value);
  };

  return (
    <div
      tabIndex={0}
      className={`${classes.button} ${
        isDisabled ? "nonfocusable" : "focusable"
      } ${className}`}
      onClick={isDisabled ? null : handleClick}
      data-sn-down={dataSnDown}
      data-sn-up={isTop ? "@keyboardGral" : null}
    >
      {value}
    </div>
  );
};

export default React.memo(KeyboardButton);
