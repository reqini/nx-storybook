import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import ISO6391 from "iso-639-1";

import ButtonGeneric from "../../Buttons/ButtonGeneric";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
  // modalidad simple
  containerModal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: theme.sizeBody.hd.height,
  },
  // esta modalidad de styles es cuando manejas props
  /* containerModal: () => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: theme.sizeBody.hd.height,
  }), */
  contentButtons: {
    textAlign: "center",
    maxWidth: 550,
  },
}));

const Languages = ({
  options = [],
  onClick = () => {},
  contentId = null,
  isPreview = false,
  isLive = false,
  selected = "pt",
}) => {
  const classes = useStyles();

  if (!selected) {
    selected = "pt";
  }
  if (isLive) {
    return (
      <div className={classes.containerModal}>
        <div className={classes.contentButtons}>
          {options.map((item, i) => {
            return (
              <ButtonGeneric
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onClick({ item });
                }}
                // title={ISO6391.getNativeName(item)}
                title={item}
              >
                {(options.length === 1 || item === selected) && <CheckIcon />}
              </ButtonGeneric>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={classes.containerModal}>
      <div className={classes.contentButtons}>
        {options.map((item) => {
          const isCurrent = isPreview
            ? item.is_current
            : item.content_id === contentId;

          return (
            <ButtonGeneric
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onClick({ item });
              }}
              title={item.desc}
            >
              {isCurrent && <CheckIcon />}
            </ButtonGeneric>
          );
        })}
      </div>
    </div>
  );
};

export default Languages;
