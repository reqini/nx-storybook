import React, { useEffect, useState } from "react";
import Translator from "../../../requests/apa/Translator";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  active: {
    height: theme.sizeButton.height.main,
    background: `${theme.palette.active.main}!important`,
    border: `3px solid ${theme.palette.active.main}!important`,
    fontWeight: 900,
    position: "initial",
    marginBottom: 0,
  },
  formGroup: {
    margin: "auto",
    width: "100%",
  },
  buttonFilter: {
    height: 56,
    width: '100%',
    paddingTop: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnSearch: {
    background: theme.palette.buttonsColor.main,
    border: "3px solid transparent",
    minWidth: 137,
    height: theme.sizeButton.height.main,
    borderRadius: 4,
    fontWeight: 300,
    fontSize: 20,
    color: "#fff",
    textDecoration: "none",
    marginRight: 10,

    "&:focus": {
      height: theme.sizeButton.height.foco,
      background: theme.palette.primary.main,
      fontWeight: 900,
      position: "initial",
      marginBottom: 0,
      marginTop: 0,
    },
  },
}));

const RenderButton = ({ pagSelected, setPagSelected, result = [] }) => {
  const classes = useStyles({});

  const extraProps = { "data-sn-down": "@searchCont" };
  if (!result.length) {
    extraProps["data-sn-down"] = "@keyboard";
  }

  return (
    <div
      id="searchButtoms"
      className={`${classes.formGroup} ${classes.buttonFilter} button-filter`}
    >
      <button
        className={`${classes.btnSearch} focusable ${
          pagSelected === "all" && `${classes.active} active`
        }`}
        onClick={() => setPagSelected("all")}
        {...extraProps}
      >
        {Translator.get("net_busqueda_all", "todos")}
      </button>

      <button
        className={`${classes.btnSearch} focusable ${
          pagSelected === "tv" && `${classes.active} active`
        }`}
        onClick={() => setPagSelected("tv")}
        {...extraProps}
      >
        {Translator.get("net_busqueda_tv", "TV")}
      </button>

      <button
        className={`${classes.btnSearch} focusable ${
          pagSelected === "movies" && `${classes.active} active`
        }`}
        onClick={() => setPagSelected("movies")}
        {...extraProps}
      >
        {Translator.get("net_busqueda_filmes", "Filmes")}
      </button>

      <button
        className={`${classes.btnSearch} focusable ${
          pagSelected === "series" && `${classes.active} active`
        }`}
        onClick={() => setPagSelected("series")}
        {...extraProps}
      >
        {Translator.get("net_busqueda_series", "Series")}
      </button>

      <button
        className={`${classes.btnSearch} focusable ${
          pagSelected === "talents" && `${classes.active} active`
        }`}
        onClick={() => setPagSelected("talents")}
        {...extraProps}
      >
        {Translator.get("net_busqueda_artista", "artista")}
      </button>
    </div>
  );
};
export default RenderButton;
