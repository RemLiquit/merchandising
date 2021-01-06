import React from "react";
import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h1>ABOUT US</h1>
          <p>Contacta con Nosotros</p>
          <div className="footer-contact-container">
            <div className="footer-elements">
              <i class="fas fa-map-marker" />
              <div className="footer-element-text">
                <h2>Direccion</h2>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
            <div className="footer-elements">
              <i class="fas fa-envelope"></i>
              <div className="footer-element-text">
                <h2>Preguntas</h2>
                <p>xxxxxxx@gmai.com</p>
              </div>
            </div>
            <div className="footer-elements">
              <i class="fas fa-phone-volume" />
              <div className="footer-element-text">
                <h2>Telefono</h2>
                <p>+591 00000000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-connect">
          <h1>CONNECT WITH US</h1>
          <div className="footer-icons">
            <i class="fab fa-facebook-square" />
            <i class="fab fa-whatsapp-square" />
            <i class="fab fa-instagram-square" />
          </div>
        </div>
      </div>
      <span>© 2020 ------. Todos los Derechos Reservados</span>
    </div>
  );
};

export default Footer;
