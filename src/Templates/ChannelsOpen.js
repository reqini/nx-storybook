import React from "react";
import { makeStyles } from "@material-ui/core/styles"

import { useTranslation } from 'react-i18next'
import Slider from "react-slick";

import ButtonGeneric from "../Atoms/Buttons/ButtonGeneric"
import SimpleImage from "../Atoms/Image/SimpleImage"
import Typography from "../Atoms/Typography/Typography"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const imageBackground = require("../Atoms/Assets/net_profile_background.png")
const listMock = [1, 2, 3, 4];

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "column",
    background: 'black'
  },
  contentDataCenter: {
    width: 960,
    height: 720,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    width: "100%",
  },
  background: {
    backgroundImage: `url(${imageBackground})`,
    position: "absolute",
    top: 0,
    width: 960,
    height: 450,
    boxShadow: "inset 2em -1em 6em 4em #000",
  },
  contentSlideData: {
    position: "relative",
    padding: "0 200px",
    boxSizing: "border-box",
    display: "flex!important",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  icon: {
    background: "#3D5AFE",
    borderRadius: 8,
    width: 40,
    height: 40,
    padding: 5,
    boxSizing: "border-box",
    color: "white",
    margin: "30px 0",
  }
}));

var settings = {
  dots: true,
  arrows: true,
  infinite: false,
  initialSlide: 0,
  slidesToScroll: 1,
  slidesToShow: 1,
};

const ChannelsOpen = () => {

  const classes = useStyles();
  const { t } = useTranslation()

  return (
    <div className={classes.container}>
      <div className={classes.contentDataCenter}>
        <div className={classes.background} />
        <Slider {...settings} className={classes.slider}>
          {listMock.map((id) => {
            return (
              <div key={id} className={classes.contentSlideData}>
                <SimpleImage image={t('asset.logo')} height={71} />
                <SimpleImage className={classes.icon} image={t('asset.wifi.wifi')} height={71} />
                <Typography fontSize={32} fontWeight="bold" variant="h2">sinal aberto!</Typography>
                <Typography fontSize={32} color="#B8B8B8" margin="0 0 40px 0" variant="p">
                  Desfrute de todo conteúdo HBO até 20/07/2019
                </Typography>
                <ButtonGeneric margin={5} title={"ver filmes e séries"} />
                <ButtonGeneric margin={5} title={"ver programas ao vivo"} />
                <ButtonGeneric margin={5} title={"agora nao"} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default ChannelsOpen;