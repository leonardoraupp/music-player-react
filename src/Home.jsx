import { Parallax } from "react-parallax";
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="navbar-fixed" style={{ zIndex: 998 }}>
        <nav className=" purple darken-2">
          <ul
            id="slide-out"
            className="sidenav"
            style={{
              backgroundImage: "https://wallpapercave.com/wp/wp4892382.jpg",
            }}
          >
            <li>
              <div className="user-view">
                <div className="background">
                  <img id="img" src="img/fundoside.gif" alt="Fundo" />
                </div>
                <a href="#">
                  <i className="fab fa-angrycreative fa-4x"></i>
                </a>
              </div>
            </li>
            <li>
              <a style={{ color: "violet" }} href="home.jsx">
                Home
              </a>
            </li>
            <li>
              <a style={{ color: "violet" }} href="historia.jsx">
                História
              </a>
            </li>
            <li>
              <a style={{ color: "violet" }} href="radio.jsx">
                Rádio
              </a>
            </li>
            <li>
              <a style={{ color: "violet" }} href="index.php">
                Contato
              </a>
            </li>
          </ul>
          <a href="#" data-target="slide-out" className="sidenav-trigger">
            <i className="fas fa-align-justify"></i>
          </a>
          <div className="nav-wrapper">
            <a href="home.jsx" className="brand-logo">
              {" "}
              <i className="fab fa-angrycreative fa-3x"></i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="home.jsx">Home</a>
              </li>
              <li>
                <a href="historia.jsx">História</a>
              </li>
              <li>
                <a href="radio.jsx">Rádio</a>
              </li>
              <li>
                <a href="index.php">Contato</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Parallax
        bgImage="https://i.pinimg.com/originals/2d/e8/b5/2de8b59daf0cd5a53c81ef4b3f44ea23.gif"
        bgImageAlt="the cat"
        strength={200}
      >
        <div style={{ height: "600px" }} />
      </Parallax>

      <div id="conteudo">
        <h1>Why do we use it?</h1>
        <p>
          It is a long established fact that a reader will
          <br />
          be distracted by the readable content of a page when
          <br />
          looking at its layout. The point of using Lorem Ipsum
          <br />
          is that it has a more-or-less normal distribution of
          <br />
          letters, as opposed to using 'Content here, content here',
          <br />
          making it look like readable English. Many desktop publishing
          <br />
          packages and web page editors now use Lorem Ipsum as their default
          <br />
          model text, and a search for 'lorem ipsum' will uncover many web sites
          <br />
          still in their infancy. Various versions have evolved over the years,
          <br />
          sometimes by accident, sometimes on purpose (injected humour and the
          like).
          <br />
        </p>
      </div>
      <Parallax
        bgImage="https://i.pinimg.com/originals/5f/26/47/5f264729a4b1c06cff163013ac6c026f.gif"
        bgImageAlt="the cat"
        strength={-80}
      >
        <div style={{ height: "600px" }} />
      </Parallax>

      <footer id="footer" className="page-footer purple darken-2">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">
                Para mais informações entre em contato com nós.
              </h5>
              <p className="grey-text text-lighten-4">
                Você pode se comunicar com nossa equipe acessando a aba
                contatos.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Mídias sociais</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Facebook
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Twitter
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Whatsapp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2021 Matheus e Leonardo
            <a className="grey-text text-lighten-4 right" href="#!">
              Site sem fins lucrativos e roubo de direitos autorais.
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
