import { Parallax } from "react-parallax";
import React from "react";
import "./Home.css";
import Template from "./Template";

const Home = () => {
  return (
    <Template>
  


  {/* Primeiro filho */}
      <Parallax
        bgImage="https://i.pinimg.com/originals/2d/e8/b5/2de8b59daf0cd5a53c81ef4b3f44ea23.gif"
        bgImageAlt="the cat"
        strength={0}
      >
        <div style={{ height: "600px" }} />
      </Parallax>



      {/* segundo filho */}
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


      {/* Terceiro filho */}
      <Parallax
        bgImage="https://i.pinimg.com/originals/5f/26/47/5f264729a4b1c06cff163013ac6c026f.gif"
        bgImageAlt="the cat"
        strength={200}
      >
        <div style={{ height: "600px" }} />
      </Parallax>

        
     
    </Template>
  );
};

export default Home;
