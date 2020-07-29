//
// TextTranslate
//
import React from "react";
import { translate } from "../../../../utils/Translate";

export default function TextTranslate({
  code,
  data = {},
  lang,
  className = "",
  variant = "span",
}) {

  return React.createElement(
    variant,
    { className },
    translate(code, data, lang)
  );
}
