import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  description: {
    fontSize: "20px",
    lineHeight: "26px",
    fontWeight: "300 !important",
    textAlign: "left",
    maxWidth: "700px",
    marginBottom: 15,
    height: "auto",
    maxHeight: "102px",
    overflow: "hidden",

    '& p': {
      margin: 0
    }
  },
}));

const Description = ({ description }) => {

  const classes = useStyles();

  return (
    <div className={`${classes.description}`}>
      <p>{description}</p>
    </div>
  );
};
export default React.memo(Description);
