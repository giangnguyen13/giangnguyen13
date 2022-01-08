import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Blogging from "../images/blogging.svg";
import DynamicTypist from "../components/DynamicTypist";

const Welcome = ({ setActiveSection }) => {
  const id = "introduction";
  const { ref, inView } = useInView();
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
      <h1 className='cover-heading'>(｡･∀･)ﾉﾞ Hi, I'm Giang!</h1>
      <DynamicTypist />
      <div class='mouse_scroll'>
        <div class='mouse'>
          <div class='wheel'></div>
        </div>
        <div>
          <span class='m_scroll_arrows unu'></span>
          <span class='m_scroll_arrows doi'></span>
          <span class='m_scroll_arrows trei'></span>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
