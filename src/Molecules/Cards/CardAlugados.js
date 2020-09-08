import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  cardAlugados: ({ width, height, borderRadius }) => ({
    background: "#1c1e1d",
    height: height || 225,
    width: width || 290,
    margin: 7,
    borderRadius: borderRadius || 12,
    overflow: "hidden",

    "&:hover": {
      border: `4px solid white`,
      margin: 3,
    },
    "&:focus": {
      border: `4px solid white`,
      margin: 3,
    },
  }),
  cardAlugadosImage: ({ bgSize, image }) => ({
    backgroundImage: `url(${
      image ||
      "http://clarovideocdn5.clarovideo.net/pregeneracion//cms/images/202001/75478_Default_Passangers-now_16154434.jpg"
    })`,
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundSize: bgSize || "100%",
    width: "100%",
    height: 155,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  }),
  cardAlugadosContent: {
    boxSizing: "border-box",
    padding: 10,
  },
  title: () => ({
    color: "white",
    fontSize: 15,
    marginBottom: 5,
  }),
  subTitle: ({ width }) => ({
    color: "rgb(210, 176, 7)",
    width: width,
    fontSize: 15,
  }),
}));

const CardAlugados = ({
  width,
  height,
  bgSize,
  borderRadius,
  title = false,
  image,
  children,
  subTitle,
  snUp = null,
  snDown = null,
  snLeft = null,
  id,
  focusHandlerDown = () => {},
}) => {
  const classes = useStyles({
    width,
    height,
    bgSize,
    borderRadius,
    image,
    subTitle,
  });

  return (
    <div
      id={id}
      className={`focusable ${classes.cardAlugados}`}
      tabIndex="0"
      onKeyDown={(e) => {
        focusHandlerDown(e);
      }}
      snUp={snUp}
      snDown={snDown}
      snLeft={snLeft}
    >
      <div className={`${classes.cardAlugadosImage}`}>{children}</div>
      <div className={classes.cardAlugadosContent}>
        {title && (
          <Typography className={classes.title} variant="body1" noWrap>
            {title}
          </Typography>
        )}
        {subTitle && (
          <Typography className={classes.subTitle} variant="body2" noWrap>
            {subTitle}
          </Typography>
        )}
      </div>
    </div>
  );
};
export default React.memo(CardAlugados);
