import get from "lodash/get";
import moment from "moment";

const resizeImage = (src, width, height) => {
  if (src.indexOf("?") > 0) {
    src = src.substring(0, src.indexOf("?"));
  }

  let result = src.includes("assetsnx")
    ? `${src}?w=${width}`
    : src.includes("clarovideocdn")
    ? width < 500
      ? `${src}?imwidth=${width}`
      : `${src}?size=${width}x${height}`
    : src;

  return result;
};

// copiado de level ( llevar user/seen a midleware ?)
const getItemPropertiesTv = ({
  item = {},
  common = {},
  event = {},
  dateBegin,
  dateEnd,
  dateFrom,
  isSearch = false,
}) => {
  let isSerie = common.is_series;

  let imaFull = isSerie
    ? get(event, "ext_eventimage.cast_ensemble_16_9") !== "" &&
      get(event, "ext_eventimage.cast_ensemble_16_9")
    : get(event, "ext_eventimage.key_art_16_9") !== "" &&
      get(event, "ext_eventimage.key_art_16_9");

  if (!imaFull) {
    imaFull =
      (get(event, "ext_eventimage.cast_ensemble_16_9") !== "" &&
        get(event, "ext_eventimage.cast_ensemble_16_9")) ||
      (get(event, "ext_eventimage.key_art_16_9") !== "" &&
        get(event, "ext_eventimage.key_art_16_9")) ||
      (event.image_clean_horizontal !== "" && event.image_clean_horizontal) ||
      common.image_background;
  }

  const imaCard = get(item, "ext_eventimage.iconic_16_9");
  const description = event.description || item.description;
  const duration = event.duration || item.duration;
  const name = event.name || item.name;

  return {
    // image_channel: item.image && resizeImage(item.image, 290),
    image_channel: resizeImage(
      get(item, "image") || get(item, "channel_image"),
      290
    ),
    imageFull: imaFull && resizeImage(imaFull, 1280, 720),
    imageCard: imaCard && resizeImage(imaCard, 290),
    title: name,
    description: description,
    duration: duration,
    date_begin: dateBegin,
    date_end: dateEnd,
    date_end_new: moment(dateEnd.replace(/\//g, "-").replace(" ", "T"))
      .format("HH:mm")
      .replace(":", "h")
      .replace("h00", "h"),
    date_advance: advance(dateBegin, dateEnd, dateFrom),
    group_id: common.id,
    year: event.ext_year,
    genres: event.genres,
    original: item, // para test
  };
};

const getItemProperties = ({ item, version = "v5.86", category }) => {
  let itemFinal = item;
  if (version === "v6") {
    itemFinal = get(item, item.type);
  }

  const {
    id,
    group_id,
    type,
    section,
    title,
    description,
    short_description,
    image_large,
    image_still,
    image_background,
    year,
    rating_code,
    crest,
    image_highlight,
    duration,
    node,
    model_type,
    external,
    description_large,
    image_clean_horizontal,
    image_base_horizontal,
    season_number,
    episode_number,
    is_series: isSerie,
  } = itemFinal;

  let rating = get(external, "gracenote.rating_classind") || null;
  // lo tomamos siempre del gracenote, no lo pisamos con el amco
  // if (version === "v6") {
  //   rating = rating_code || null;
  // }

  const imaCardSerie = isSerie
    ? get(external, "gracenote.assets.banner_l1_16_9")
    : null;
  /* let imaCard =
    imaCardSerie ||
    get(external, "gracenote.assets.vod_art_16_9") ||
    image_base_horizontal ||
    image_highlight ||
    image_large ||
    image_background ||
    image_still; */

  let imaCard =
    get(external, "gracenote.assets.vod_art_16_9") ||
    get(external, "gracenote.assets.banner_l1_16_9") ||
    image_base_horizontal ||
    image_large;

  // type node es para categorias (accion, teens, etc)
  const imaFullSerie = isSerie
    ? get(external, "gracenote.assets.cast_ensemble_16_9")
    : null;

  /*
  let imaFull =
    type == "node"
      ? image_background
      : imaFullSerie ||
      get(external, "gracenote.assets.key_art_16_9") ||
      image_clean_horizontal ||
      image_background ||
      image_still;
  */

  let imaFull =
    type == "node"
      ? image_background
      : get(external, "gracenote.assets.key_art_16_9") ||
        get(external, "gracenote.assets.cast_ensemble_16_9") ||
        imaCard ||
        image_background ||
        image_clean_horizontal;

  if (category && category.id === "nx-providers") {
    imaFull = image_background;
  }

  imaFull = itemFinal.vcardSerie
    ? get(external, "gracenote.assets.iconic_16_9")
    : imaFull; // ver bien de donde sale full para series en vcard

  let href = type == "node" ? `/node/${section}` : null;
  if (version === "v6") {
    href = node ? `/node/${node}` : null;
  }

  return {
    group_id: id || group_id || "",
    href: href,
    provider: category && category.id === "nx-providers",
    imageFull: imaFull && resizeImage(imaFull, 1280, 720),
    imageCard: imaCard && resizeImage(imaCard, 290),
    title: title || "",
    year: year || null,
    rating: rating,
    description:
      short_description ||
      description ||
      crest ||
      get(external, "gracenote.description") ||
      description_large,
    duration,
    season: season_number,
    episode: episode_number,
    original: itemFinal, // para test
  };
};

const getItemPropertiesTalent = ({ item }) => {
  const imaCard = item.image;

  const title = item.name
    ? `${item.name || ""} ${item.surname || ""}`
    : `${item.first_name || ""} ${item.last_name || ""}`;

  return {
    internal_ids: item.internal_ids || [],
    group_id: item.id,
    imageCard: imaCard && resizeImage(imaCard, 110),
    title: title,
  };
};

const advance = (since, to, now) => {
  const strToDate = (string) => {
    string = string.replace(/\//g, "").replace(/:/g, "").replace(" ", "");
    let result = new Date(
      parseInt(string.substring(0, 4)),
      parseInt(string.substring(4, 6)) - 1, // los meses empiezan en 0
      parseInt(string.substring(6, 8)),
      parseInt(string.substring(8, 10)),
      parseInt(string.substring(10, 12)),
      parseInt(string.substring(12, 14))
    );
    return result;
  };

  let result = {
    total: (strToDate(to).getTime() - strToDate(since).getTime()) / 1000 / 60,
    paso: (strToDate(now).getTime() - strToDate(since).getTime()) / 1000 / 60,
  };
  result.porcent = parseInt((result.paso / result.total) * 100);
  return result;
};

export {
  getItemPropertiesTv,
  getItemPropertiesTalent,
  getItemProperties,
  resizeImage,
};
