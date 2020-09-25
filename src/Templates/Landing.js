import React, { useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"

import { useHistory } from "react-router-dom"
import { useTranslation } from "react-i18next"

import SimpleImage from "../Atoms/Image/SimpleImage"
import GradientLanding from "../Atoms/Gradients/GradientLanding"
import ButtonGeneric from "../Atoms/Buttons/ButtonGeneric"
import Typography from "../Atoms/Typography/Typography"

const imageBackground = require("../Atoms/Assets/net_profile_background.png")

const useStyles = makeStyles((theme) => ({
  global: {
    backgroundColor: "black",
    display: 'flex'
  },
  contatText: {
    marginLeft: 127,
    height: 630,
  },
  contentButton: {
    display: "flex",
    justifyContent: "flex-start",
    paddingTop: 60,
  },
  title: {
    fontSize: 43,
  },
  logo: {
    marginBottom: 100
  },
  descriptionLanding: {
    fontSize: 27,
    marginTop: 20,
    fontWeight: 300,
  },
  introInfo: {
    width: 640,
    height: theme.sizeBody.hd.height,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  introBackground: {
    width: 640,
    height: theme.sizeBody.hd.height,
    background: theme.palette.primary.main,
    backgroundImage: `url(${imageBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "right center",
    position: "relative",
  },
}));

const LandingPage = () => {

  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      window.SpatialNavigation.focus(".landing .focusable:first-child");
    }, 200);
  }, []);

  const metadataTitle = t("net_launch_bienvenido", "Bem-vindo");
  const metadataDescrip = t(
    "net_launch_mensaje",
    "Reunimos o maior acervo de conteúdo, programas de TV, filmes e series. Tudo o que você gosta em um só lugar!"
  );
  const metadataButton = t("net_launch_boton_conectar", "conectar");

  return (
    <div className={`${classes.global} landing`}>
      <div className={`${classes.introInfo}`}>
        <div className={classes.contatText}>
          <div className={`${classes.logo}`}>
            <SimpleImage image={t('asset.logo')} width={183} alt='claroTv logo' />
          </div>
          <Typography variant="h3" className={classes.title}>
            {metadataTitle}
          </Typography>
          <Typography variant="h5" className={classes.descriptionLanding}>
            {metadataDescrip}
          </Typography>
          <div className={classes.contentButton}>
            <ButtonGeneric
              margin={0}
              width={280}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                history.push("/login");
              }}
              title={metadataButton}
            />
          </div>
        </div>
      </div>
      <div className={classes.introBackground}>
        <GradientLanding width={"50%"} />
      </div>
    </div>
  );
};

export default LandingPage;