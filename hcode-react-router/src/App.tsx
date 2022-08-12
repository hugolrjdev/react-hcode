import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo-porsche.png";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="#" className="logo" aria-label="Logo">
          <img src={logo} alt="Logo da Porsche" />
        </a>
        <nav className="menu">
          <ul>
            <li>
              <Link to="/home"> Home </Link>
            </li>
            <li>
              <Link to="/models"> Models </Link>
            </li>
            <li>
              <Link to="/discover"> Descubra </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section id="hero">
        <div className="hero-container">
          <h2 className="hero-title">Bem Vindo a vida</h2>
          <h3 className="hero-subtitle">modelo 768T</h3>
        </div>
      </section>

      <footer>
        <div className="content">
          <div className="copyright">
            <p>
              © 2022 Hcode Treinamentos Brasil Importadora de Veículos Ltda.
              Indicações Legais. Política de Privacidade. Compliance Porsche.
              Open Source Software Notice.
            </p>
            <p>
              * As informações encontradas neste site referentes ao Porsche
              Connect não se aplicam ao Brasil, já que o programa ainda não está
              disponível no mercado brasileiro. Para mais informações sobre os
              produtos disponíveis no Brasil entre em contato com o Porsche
              Center de sua preferência.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
