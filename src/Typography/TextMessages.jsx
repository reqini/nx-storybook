import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  titleMessages: () => ({
    minWidth: 500,
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',

    "& strong": {
      fontSize: 28,
      marginBottom: 10
    },
    "& span": {
      color: theme.palette.titleMessages.main,
      fontSize: 23,
      marginTop: 5,
      lineHeight: '30px',
      fontWeight: 300,
    }
  }),
}));

export default function TextMessages({ title, textContent, action = null }) {

  const classes = useStyles({ title });

  return (
    <React.Fragment>
      <p className={classes.titleMessages}>
        <strong>
        {title}
        </strong>
        <span>
          {textContent}
        </span>
      </p>
      {action}
    </React.Fragment>
  );
}
