import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import ButtonGeneric from "../../Buttons/ButtonGeneric";
import ButtonBack from "../../Buttons/ButtonBack";
import { translate } from "../../../../utils/Translate";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  containerButton: {
    textAlign: "center",
    maxWidth: "550px",
  },
  title: {
    marginBottom: 100,
    fontWeight: 400,
  },
}));

const Resume = ({ onClose, onResume, onInitial, cancel }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* <ButtonBack
        onClick={(e) => {
          e.preventDefault();
          cancel();
          onClose();
        }}
      /> */}
      <div className={classes.containerButton}>
        <ButtonGeneric
          href="#"
          onClick={(e) => {
            e.preventDefault();

            onResume();
            onClose();
          }}
          title={translate("player_continue_btn")}
        />
        <ButtonGeneric
          href="#"
          onClick={(e) => {
            e.preventDefault();

            onInitial();
            onClose();
          }}
          title={translate("player_begin_btn")}
        />
      </div>
    </div>
  );
};

export default Resume;
