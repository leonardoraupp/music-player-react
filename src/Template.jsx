import React from "react";

const Template = ({children}) => {

    
   var now = new Date();


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
                <a style={{ color: "violet" }} href="/">
                  Home
                </a>
              </li>
              <li>
                <a style={{ color: "violet" }} href="/Historia">
                  História
                </a>
              </li>
              <li>
                <a style={{ color: "violet" }} href="/Radio">
                  Rádio
                </a>
              </li>
              <li>
                <a style={{ color: "violet" }} href="/Contato">
                  Contato
                </a>
              </li>
            </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger">
              <i className="fas fa-align-justify"></i>
            </a>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">
                {" "}
                <i className="fab fa-angrycreative fa-3x"></i>
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/Historia">História</a>
                </li>
                <li>
                  <a href="/Radio">Rádio</a>
                </li>
                <li>
                  <a href="/Contato">Contato</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {children}

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
              { now.getFullYear() } © Matheus, Leonardo e João
              <a className="grey-text text-lighten-4 right" href="#!">
                Site sem fins lucrativos e roubo de direitos autorais.
              </a>
            </div>
          </div>
        </footer>
      </>
    );

    
};

export default Template;
