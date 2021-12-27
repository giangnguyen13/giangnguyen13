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
    </div>
  );
};

export default CardProjectItem;
