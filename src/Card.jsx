import React from 'react'
import "./css/Card.css";



const Card = () => {

    return (
      <>
       
        <div class="row">


  <div class="col s3">
      <div class="card hoverable " id="cardEstilo">
      
        <div class="card-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34iEOaXace3VrMFdmWGZlPt_tA45DhQgVUA&usqp=CAU"/>
          <span class="card-title">Afterglow</span>
        </div>
        <div class="card-content">
          <p>Ouça agora <i class="fas fa-music"></i></p>
        </div>
        <div class="hide-on-med-and-down">
          <a id="botaoPlay" class="btn-floating btn-large   waves-effect btn modal-trigger purple accent-3" href="#modal1"><i class="fas fa-headphones"></i></a>
        </div>
        <div class="hide-on-large-only">
          <a id="botaoPlayC" class="btn-floating btn-small   waves-effect btn modal-trigger purple accent-3" href="#modal1"><i class="fas fa-headphones"></i></a>

        </div>
      </div>
    
  </div>
  </div>

      </>
    );
    
};

export default Card
