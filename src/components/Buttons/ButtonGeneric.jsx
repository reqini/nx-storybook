import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  constainer: ({ width, margin = 10 }) => ({
    display: "flex",
    flexFlow: "column",
    boxSizing: "border-box",
    width: width,
    margin: margin,
  }),
  button: ({ width, heightFocoDisable = false }) => {
    return {
      width: width,
      height: theme.sizeButton.height.main,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: theme.palette.buttonsColor.main,
      borderRadius: 6,
      fontSize: 26,
      lineHeight: "22px",
      color: "#fff",
      position: "relative",
      textDecoration: "none",
      //textTransform: "lowercase",
      boxSizing: "border-box",

      "&:focus": {
        height: heightFocoDisable
          ? theme.sizeButton.height.main
          : theme.sizeButton.height.foco,
        background: theme.palette.buttonsColor.foco,
        borderRadius: 1,
        fontWeight: 900,
        color: "#fff",
        border: "none",
        background: theme.palette.primary.main,
        boxSizing: "border-box",
        transition: "box-shadow 0.15s ease-in",
        boxShadow: "0 0 0 5px rgba(71, 83, 107, 1)",
      },

      '& span': {
        fontSize: 20,
        fontWeight: 500,
        textTransform: 'lowercase'
      }
    };
  },
  nonFocusable: {
    background: 'silver!important',
    color: 'gray!important',
    cursor: 'no-drop!important'
  },
  description: {
    marginTop: 5,
    fontSize: "18px",
    textTransform: "lowercase",
    textAlign: "center",
  },
}));

export default function ButtonGeneric({
  isFocusable = true,
  children,
  title,
  width = 329,
  heightFocoDisable,
  margin,
  onClick,
  description,
  snUp = null,
  snDown = null,
  snRight = null,
  snLeft = null,
}) {
  const classes = useStyles({ width, heightFocoDisable, margin, isFocusable });

  return (
    <div className={classes.constainer}>
      <a
        className={`${isFocusable ? "focusable" : classes.nonFocusable} ${classes.button}`}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onClick && onClick(e);
        }}
        data-sn-up={snUp}
        data-sn-down={snDown}
        data-sn-right={snRight}
        data-sn-left={snLeft}
      >
        <span>{title}</span>
        {children}
      </a>
      {description && <p className={classes.description}>{description}</p>}
    </div>
  );
}
