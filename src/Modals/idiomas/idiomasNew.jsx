import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import ISO6391 from "iso-639-1";

import ButtonGeneric from "../../Buttons/ButtonGeneric";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
  // modalidad simple
  containerModal: {
    display: "flex",
    flexFlow: "row",
    alignItems: "center",
    justifyContent: "center",
    height: theme.sizeBody.hd.height,
  },
  containerSubModal: {
    display: "flex",
    flexFlow: "row",
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
    maxWidth: 550
  },
  title: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 28,
  },
  containerCheck: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0,
    width: 0
  },
  check: {
    paddingLeft: "30px",
  },
}));

const Languages = ({
  options = [],
  optionsLegendas = [],
  title,
  titleAudioLegendas,
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
          <h2 className={classes.title}>{title}</h2>
          {options.map((item, i) => {
            return (
              <ButtonGeneric
                width={250}
                backgroundButton={false}
                fontWeight={false}
                minHeight={54}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onClick({ item });
                }}
                // title={ISO6391.getNativeName(item)}
                title={item}
              >
                {(options.length === 1 || item === selected) && (
                  <div className={classes.containerCheck}>
                    <CheckIcon className={classes.check} />
                  </div>
                )}
              </ButtonGeneric>
            );
          })}
        </div>
      </div>
    );
  }

  if (options.length >= 2) {
    return (
      <div className={classes.containerModal}>
        <div className={classes.containerSubModal}>
          <div className={classes.contentButtons}>
            <h2 className={classes.title}>{title}</h2>
            {options.map((item) => {
              const isCurrent = isPreview
                ? item.is_current
                : item.content_id === contentId;

              return (
                <ButtonGeneric
                  key={"id-" + item.option_id}
                  width={250}
                  backgroundButton={false}
                  fontWeight={false}
                  fontWeightSpan={isCurrent ? 500 : ""}
                  minHeight={54}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onClick({ item });
                  }}
                  title={
                    item.option_id.indexOf("D-") || item.option_id.indexOf("O-")
                      ? item.label_short
                      : ""
                  }
                >
                  <div className={classes.containerCheck}>
                    {isCurrent && <CheckIcon className={classes.check} />}
                  </div>
                </ButtonGeneric>
              );
            })}
          </div>

          <div className={classes.contentButtons}>
            <h2 className={classes.title}>{titleAudioLegendas}</h2>
            {optionsLegendas.map((item) => {
              const isCurrent = isPreview
                ? item.is_current
                : item.content_id === contentId;
              return (
                <ButtonGeneric
                  key={"id-" + item.option_id}
                  width={250}
                  minHeight={54}
                  backgroundButton={false}
                  fontWeight={false}
                  fontWeightSpan={isCurrent ? 500 : ""}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onClick({ item });
                  }}
                  title={item.option_id.indexOf("S-") ? item.label_short : ""}
                >
                  <div className={classes.containerCheck}>
                    {isCurrent && <CheckIcon className={classes.check} />}
                  </div>
                </ButtonGeneric>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.containerModal}>
      <div className={classes.containerSubModal}>
        <div className={classes.contentButtons}>
          <h2 className={classes.title}>{title}</h2>
          {options.map((item) => {
            const isCurrent = isPreview
              ? item.is_current
              : item.content_id === contentId;

            return (
              <ButtonGeneric
                width={250}
                backgroundButton={false}
                fontWeight={false}
                fontWeightSpan={isCurrent ? 500 : ""}
                minHeight={54}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onClick({ item });
                }}
                title={
                  item.option_id.includes("S-") ||
                  item.option_id.includes("D-") ||
                  item.option_id.includes("O-")
                    ? item.label_short
                    : ""
                }
              >
                <div className={classes.containerCheck}>
                  {isCurrent && <CheckIcon className={classes.check} />}
                </div>
              </ButtonGeneric>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Languages;
