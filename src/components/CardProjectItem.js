import React from "react";

const CardProjectItem = ({ img, imgText, title, description, url }) => {
  const openLink = () => {
    window.open(url, "_blank");
  };
  return (
    <div className='card' onClick={openLink}>
      <img src={img} alt={imgText} srcSet='' className='card-img-top' />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{description}</p>
      </div>
      <div class='card-footer'>
        <img src='https://camo.githubusercontent.com/2517e229fd25bacf06ae6d79587c69f2ec75a0cd2860344ecd1994e28bab0759/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d48544d4c352d4533344632363f6c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465267374796c653d666c61742d737175617265' />
        <img src='https://camo.githubusercontent.com/2517e229fd25bacf06ae6d79587c69f2ec75a0cd2860344ecd1994e28bab0759/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d48544d4c352d4533344632363f6c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465267374796c653d666c61742d737175617265' />
        <img src='https://camo.githubusercontent.com/2517e229fd25bacf06ae6d79587c69f2ec75a0cd2860344ecd1994e28bab0759/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d48544d4c352d4533344632363f6c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465267374796c653d666c61742d737175617265' />
      </div>
    </div>
  );
};

export default CardProjectItem;
