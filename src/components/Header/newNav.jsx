import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Translator from "../../../requests/apa/Translator";

import { Modal } from "../../../containers/App/Modal";
import Exit from "../Modals/exit/exit";

import PersistentDrawerLeft from "./materialNav";

import imageProfile from "../Icons/Nav/profile.svg";
import imageMylist from "../Icons/Nav/MInhaLista.svg";
import imageSearch from "../Icons/Nav/Search.svg";
import imageAlugados from "../Icons/Nav/Alugados.svg";
import imagePlanos from "../Icons/Nav/Planos.svg";
import imageSalir from "../Icons/Nav/salir.svg";

// para usar nodes dinamicamente llamar a
// import { navData } from "../../requests/loader";
// navData()
// ---------------
const nodes = [
  {
    id: "47338",
    code: "home",
    text: "início",
  },
  {
    id: "54231",
    code: "tv",
    text: "ao Vivo",
  },
  {
    id: "47339",
    code: "movies",
    text: "filmes",
    childs: [
      {
        id: "47346",
        code: "filmes_acao",
        text: "Ação",
      },
      {
        id: "53440",
        code: "filmes_teens",
        text: "Teens",
      },
      {
        id: "47348",
        code: "filmes_comedia",
        text: "Comédia",
      },
    ],
  },
  {
    id: "47341",
    code: "kids",
    text: "infantil",
  },
];

const useStyles = makeStyles((theme) => ({
  header: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    zIndex: 5,
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "266px",
    overflowX: "hidden",

    listStyle: "none",
    margin: 0,
    padding: "6px 0",
    overflow: "hidden",
  },
  iconNav: {
    width: "35px !important",
    marginRight: "25px",
  },
  navItem: {
    width: "100%",
    minWidth: "max-content",
    color: "#fff",
    padding: "5px",
    textDecoration: "none",
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontWeight: "300 !important",

    padding: "6px 0 6px 21px",
    textTransform: "lowercase",
    fontWeight: 400,

    "&:focus": {
      borderRadius: "0px",
      backgroundColor: theme.palette.primary.main,
      outline: 0,
      fontWeight: "800 !important",
    },
  },
  navItemActive: {
    backgroundColor: theme.palette.active.main,
    fontWeight: "500 !important",
  },
  li: {
    overflow: "hidden",
    margin: "4px 0",
    minHeight: "36px",
    display: "flex",
    width: "100%",
  },
}));

const NavLinkMenu = ({
  id,
  to,
  image,
  translate,
  onClick,
  location,
  snDown = null,
}) => {
  const classes = useStyles();
  let active =
    (location && location.state && location.state.menuSelect) ||
    (location && location.pathname) ||
    false;

  switch (active) {
    case "/node/filmes_teens":
    case "/node/filmes_acao":
    case "/node/filmes_comedia":
      active = "/node/movies";
  }

  const { src, alt } = image;
  const { key, text } = translate;

  // para que el de salir no genere un history.push
  if (!to) {
    return (
      <a
        id={id}
        key={id}
        tabIndex={0}
        className={`${classes.navItem} focusable ${
          active === `/${id}` || active === `/node/${id}`
            ? `${classes.navItemActive} active`
            : ""
        }`}
        onClick={onClick}
        data-sn-down={snDown}
      >
        <img className={classes.iconNav} src={src} alt={alt} />
        <span>{Translator.get(key, text)}</span>
      </a>
    );
  }

  return (
    <NavLink
      id={id}
      key={id}
      className={`${classes.navItem} focusable ${
        active === `/${id}` || active === `/node/${id}`
          ? `${classes.navItemActive} active`
          : ""
      }`}
      to={to}
      activeClassName="active"
      onClick={onClick}
    >
      <img className={classes.iconNav} src={src} alt={alt} />
      <span>{Translator.get({ key }, text)}</span>
    </NavLink>
  );
};

const VerticalNav = ({ user, location }) => {
  const classes = useStyles();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const NavItem = ({ node, location }) => {
    let iconMenuNav = require(`../Icons/Nav/${node.code}.svg`);

    return (
      <li key={node.id} className={classes.li}>
        <NavLinkMenu
          id={node.code}
          to={`/node/${node.code}`}
          image={{ src: iconMenuNav, alt: node.text }}
          translate={{
            key: `aa-${node.text}`,
            text: node.text,
          }}
          location={location}
        />
      </li>
    );
  };

  const Nav = ({ nodes = [] }) => {
    return (
      <ul className={classes.nav}>
        <li className={classes.li}>
          <NavLinkMenu
            id="profile"
            to={`/profile`}
            image={{
              src: imageProfile,
              alt: "menu minha lista",
            }}
            translate={{
              key: "net_minha_conta_menu_vertical",
              text: "minha conta",
            }}
            location={location}
          />
        </li>
        <li className={classes.li}>
          <NavLinkMenu
            id="mylist"
            to={`/mylist`}
            image={{
              src: imageMylist,
              alt: "menu minha lista",
            }}
            translate={{
              key: "net_minha_lista_menu_vertical",
              text: "minha lista",
            }}
            location={location}
          />
        </li>
        <li className={classes.li}>
          <NavLinkMenu
            id="search"
            to={`/search`}
            image={{
              src: imageSearch,
              alt: "menu search",
            }}
            translate={{
              key: "net_busca_menu_vertical",
              text: "busca",
            }}
            location={location}
          />
        </li>
        {nodes.map((node, position) => (
          <NavItem
            key={position}
            node={node}
            position={position}
            location={location}
          />
        ))}
        <li className={classes.li}>
          <NavLinkMenu
            id="rents"
            to={`/rents`}
            image={{
              src: imageAlugados,
              alt: "rents",
            }}
            translate={{
              key: "net_alugados_menu_vertical",
              text: "alugados",
            }}
            location={location}
          />
        </li>
        <li className={classes.li}>
          <NavLinkMenu
            id="plans"
            to={`/plans`}
            image={{
              src: imagePlanos,
              alt: "plans",
            }}
            translate={{
              key: "net_planos_menu_vertical",
              text: "planos",
            }}
            location={location}
          />
        </li>
        <li className={classes.li}>
          <NavLinkMenu
            id="config"
            // to="#"
            onClick={() => {
              setIsModalOpen(true);
            }}
            image={{
              src: imageSalir,
              alt: "settings",
            }}
            translate={{
              key: "btn_menu_quit",
              text: "salir",
            }}
            snDown={" "}
            location={location}
          />
        </li>
      </ul>
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      window.SpatialNavigation.focus("@container");
    }, 100);
  };

  return (
    <div id="header" style={{ width: "80px" }}>
      <PersistentDrawerLeft>
        <div className={classes.header}>
          <div style={{ width: "100%" }}>
            <div style={{ width: "100%", height: "auto", overflow: "hidden" }}>
              <nav
                style={{
                  textAlign: "center",
                  width: "100%",
                  fontSize: "18px",
                  height: "100%",
                  maxWidth: "266px",
                }}
              >
                <Nav nodes={nodes} />
              </nav>
            </div>
          </div>
        </div>
      </PersistentDrawerLeft>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <Exit user={user} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default React.memo(VerticalNav);
