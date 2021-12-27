import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Welcome = ({ setActiveSection }) => {
  const id = "introduction";
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
  });
  useEffect(() => {
    if (inView) {
      setActiveSection(id);
    }
  }, [inView, id, setActiveSection]);

  return (
    <div className='inner cover-container text-center mx-auto' ref={ref}>
      <h1 className='cover-heading'>Hello, It's Giang Nguyen</h1>
      <p className='lead'>
        Cover is a one-page template for building simple and beautiful home
        pages. Download, edit the text, and add your own fullscreen background
        photo to make it your own.
      </p>
      <p className='lead'>
        <a href='#home' className='btn btn-lg btn-outline-secondary'>
          ⬇ Scroll Down ⬇
        </a>
      </p>
    </div>
  );
};

export default Welcome;
