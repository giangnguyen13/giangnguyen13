import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Blogging from "../images/blogging.svg";
import DynamicTypist from "../components/DynamicTypist";

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
      <img
        src={Blogging}
        alt='Illustrate man sitting in front of the laptop'
        style={{ maxWidth: "500px" }}
      />
      <h1 className='cover-heading'>Hello, It's Giang Nguyen (✪ ω ✪)</h1>
      {/* <h1 style={{ height: "3em" }}>I'm Full Stack Developer</h1> */}
      <DynamicTypist />
      <p className='lead' style={{ paddingTop: "3rem" }}>
        <a href='#home' className='btn btn-lg btn-outline-secondary'>
          ⬇ Scroll Down ⬇
        </a>
      </p>
    </div>
  );
};

export default Welcome;
