import React, { useEffect } from "react";
import "./css/Historia.css";

function Historia() {
  const target = document.getElementsByClassName("anime");
  const animationClass = "anime-start";
  const offset = (window.innerHeight * 3) / 4;

  useEffect(() => {
    handleScroll();
    window.onscroll = () => debounce(handleScroll(), 200);
    function handleScroll() {
      var documentTop = window.pageYOffset;
      for (var i = 0; i < target.length; i++) {
        var itemTop = target[i].offsetTop;
        if (documentTop > itemTop - offset) {
          target[i].className = "anime " + animationClass;
        } else {
          target[i].className = target[i].className.replace(animationClass, "");
        }
      }
    }
  }, [offset, target]);

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  return (
    <div id="body-historia">
      <h1>About us</h1>
      <section className="anime">
        <div className="grid-text">
          <h2>Obejetivo da pag</h2>
          <p>
            Essa pag web foi desenvolvida por motivos de aprendizagem,nela
            aprendemos e usamos, HTML,CSS,JS,JQUERY,PHP e o framework
            Materialize.
          </p>
        </div>
        <div className="grid-img">
          <img src="img/img2.png" alt="Img 2" />
        </div>
      </section>
      <section className="anime">
        <div className="grid-img img-right">
          <img src="img/img4.png" alt="Img 4" />
        </div>
        <div className="grid-text">
          <h2>Sobre o que é essa página?</h2>
          <p>
            É uma página de mídia de aúdio(Música),onde você pode curtir sua
            playlist.
          </p>
        </div>
      </section>
      <section className="anime">
        <div className="grid-text">
          <h2>Utilidade</h2>
          <p>
            Essa página web tem a utilidade de trazer a aprendizagem das
            linguagens citadas a cima, frameworks, estilização e como preencher
            conteúdo, de uma maneira responsivo para que fique adequado o acesso
            em computador e celulares. Também servindo como base para orientar
            em alguns processos de programação.
          </p>
        </div>
        <div className="grid-img">
          <img src="img/img1.png" alt="Img 1" />
        </div>
      </section>
    </div>
  );
}

export default Historia;
