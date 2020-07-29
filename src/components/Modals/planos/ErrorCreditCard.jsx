import React from "react";

import Translator from "../../../../requests/apa/Translator";
import Asset from "../../../../requests/apa/Asset";

import ButtonGeneric from "../../Buttons/ButtonGeneric";

const ErrorCreditCard = props => {
  let msg = Translator.get(
    "net_sin_medio_de_pago",
    "- No cuentas con un medio de pago, para ingresar uno, abre la aplicacion desde un dispositivo movil"
  );

  return (
    <div className="modal-overlay">
      <div class="modal-container retry error-buy">
        <div class="modal-asset">
          <img src={Asset.get("net_vcard_renta_sin_tarjeta")} alt="" />
          <div class="modal-title">
            <h3>{Translator.get("net_ningun_resultado", "ooops!")}</h3>
          </div>
          <div class="modal-content">
            <p
              className="modal_text"
              dangerouslySetInnerHTML={{
                __html: msg.split(".").join(". <br/>")
              }}
            />
          </div>
        </div>
        <div className={"modal-buttons-horizontal"}>
          <ButtonGeneric
            href="javascript:void(0)"
            onClick={e => props.onClose()}
            title={Translator.get("net_cerrar_sin_medio_de_pago", "Cerrar")}
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorCreditCard;
