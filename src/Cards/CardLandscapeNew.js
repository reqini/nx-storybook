import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  landscape: ({ width, height, bgSize, borderRadius, image }) => ({
    backgroundImage: `url(${image})`,
    border: "4px solid black",
    backgroundSize: bgSize || 230,
    borderRadius: borderRadius || 12,
    height: height || 136,
    width: width || 230,
    "&:focus": {
      border: `4px solid white`,
    },
  }),
}));

const CardLandscape = ({
  marginFoco = 4,
  minWidth,
  padding = null,
  notDefaultImg = null,
  isSerie = false,
  height = 130,
  width = 250,
  bgSize,
  bgSizeFocus,
  borderRadius,
  image,
  focusHandler,
  data = {},
  clickHandler,
  clickHandlerNew,
  border = true,
  match,
  sendToPlay,
  scrollToTop = false,
  isFocusable,
  isLast = false,
  isFirst = false,
  indexRibbon,
  withContent = false,
  snUp = null,
  snDown = null,
  snLeft = null,
  id,
  focusHandlerDown = () => {},
}) => {
  const history = useHistory();
  const classes = useStyles({
    withContent,
    width,
    height,
    bgSize,
    borderRadius,
    image,
    bgSizeFocus,
    border,
    minWidth,
    notDefaultImg,
    padding,
    marginFoco,
  });
  const [foco, setFoco] = useState(false);

  // cargar imagen full en paralelo
  useEffect(() => {
    const imgObj = new Image();
    imgObj.src = data.imageFull;
  }, []);

  return (
    <div
      id={id}
      className={`${classes.landscape} ${isFocusable ? "focusable" : ""} ${
        foco ? "active" : ""
      } ${data.href && !data.provider ? classes.category : ""}`}
      tabIndex="0"
      onClick={(e) => {
        e.preventDefault();

        if (data.sendToPlay) {
          sendToPlay(data);
        } else if (clickHandler) {
          return clickHandler();
        } else if (clickHandlerNew) {
          return clickHandlerNew(data);
        } else {
          history.push({
            pathname: data.href || `/vcard/${data.group_id}`,
            state: { menuSelect: match.url },
          });
        }
      }}
      onFocus={(e) => {
        if (scrollToTop) {
          let item =
            e.currentTarget.parentNode.parentNode.parentNode.parentNode;

          if (indexRibbon == 0 && isSerie) {
            item =
              e.currentTarget.parentNode.parentNode.parentNode.parentNode
                .parentNode;
          }

          item.scrollIntoView(true);
        }

        // setFoco(true);
        focusHandler(data);
      }}
      onKeyUp={(e) => {
        focusHandler(data);
      }}
      onKeyDown={(e) => {
        focusHandlerDown(e);
      }}
      data-sn-up={snUp}
      data-sn-down={snDown}
      data-sn-right={isLast ? "" : null}
      data-sn-left={isFirst ? (snLeft !== null ? snLeft : "@nav_down") : null}
    ></div>
  );
};

export default React.memo(CardLandscape);
