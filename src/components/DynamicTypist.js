import React, { useState, useEffect } from "react";
import Typist from "react-typist";

const DynamicTypist = () => {
  const texts = [
    "I am Full Stack Developer",
    "An Innovative Thinker",
    "and A Problem Solver",
  ];
  const cursorConfig = {
    show: false,
    blink: true,
    element: "|",
    hideWhenDone: false,
    hideWhenDoneDelay: 1000,
  };

  const delay = 500;

  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) {
      setTimeout(() => setDone(false), delay);
    }
  });

  if (done) {
    return <h1 className='dynamic-typist'>&nbsp;</h1>;
  }

  return (
    <h1 className='dynamic-typist'>
      <Typist
        cursor={cursorConfig}
        startDelay={1000}
        avgTypingDelay={100}
        onTypingDone={() => setDone(true)}
      >
        {texts[0]}
        <Typist.Backspace count={texts[0].length} delay={1000} />
        {texts[1]}
        <Typist.Backspace count={texts[1].length} delay={1000} />
        {texts[2]}
        <Typist.Backspace count={texts[2].length} delay={1000} />
      </Typist>
    </h1>
  );
};

export default DynamicTypist;
