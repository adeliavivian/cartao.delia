import React from "react";
import "../components/Cartao.css";
import logoBK from "../assets/Burger_King_logo_(1999).svg.png"; 

const Cartao = () => {
  return (
    <div className="cartao-bk">
      <div className="logo-container">
        <img src={logoBK} alt="" className="logo" />
      </div>
      <div className="info">
        <h2>Burger King</h2>
        <h3>Venha para comer como um rei!</h3>
        <p>
          📞{" "}
          <a
            href="https://wa.me/551140028922"
            target="_blank"
            rel="noopener noreferrer"
          >
            (11) 4002-8922 (WhatsApp)
          </a>
        </p>
        <p>
          🌐{" "}
          <a
            href="https://www.burgerking.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.burgerking.com.br
          </a>
        </p>
        <p>
          📸{" "}
          <a
            href="https://www.instagram.com/burgerkingbrasil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @burgerkingbrasil
          </a>
        </p>


      </div>
    </div>
  );
};

export default Cartao;
