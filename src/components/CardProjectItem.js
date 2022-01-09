import React from "react";

const CardProjectItem = ({ img, imgText, title, description, url, techs }) => {
  return (
    <div className='card'>
      <img src={img} alt={imgText} className='card-img-top' />
      <div className='card-body'>
        <h5 className='card-title text-center'>{title}</h5>
        <p className='card-text'>{description}</p>
        {url && (
          <div className='row mx-auto mb-2 justify-content-center'>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-sm btn-outline-primary'
              style={{ width: "fit-content" }}
            >
              Demo
            </a>
          </div>
        )}
      </div>
      <div className='card-footer'>
        <div className='row justify-content-center'>
          {techs.map((tech) => {
            return (
              <img key={tech.id} src={tech.source} alt={tech.description} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardProjectItem;
