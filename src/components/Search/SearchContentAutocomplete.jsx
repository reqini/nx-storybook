import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  autocomplete: () => ({
    width: 770,
    height: 60,
    margin: '10px auto',
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
  })
}));

export default function SearchContentAutocomplete({children}) {

  const classes = useStyles();

  return (
    <div className={`${classes.autocomplete}`}>
      { children }
    </div>
  );
}