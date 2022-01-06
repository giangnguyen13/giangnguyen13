import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Envelope } from "react-bootstrap-icons";
import { socials } from "../data";

const Contact = ({ setActiveSection }) => {
  const id = "contact";
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
  });
  useEffect(() => {
    if (inView) {
      setActiveSection(id);
    }
  }, [inView, id, setActiveSection]);
  return (
    <div ref={ref} className='cover-container text-center mx-auto'>
      <div>
        <h1 className='mb-4 cover-heading'>Hi there, thanks for visiting!</h1>
        <p className='text-large'>
          I am appreciated that you spent your valuable time to read about my
          profile. You have reached end of the page now. But do not leave yet,
          if you are interested in my profile, there are more things I want to
          share too. So let's create a connection.
        </p>
        <a href='mailto:giangnguyen13.ntg@gmail.com' className='contact-btn'>
          <Envelope size={50} /> Contact Now
        </a>
      </div>
      <div>
        <p className='text-large mt-3'>
          You can visit my social network pages here too!
        </p>
        <div>
          {socials.map((social) => {
            return (
              <a
                key={social.id}
                href={social.url}
                target={"_blank"}
                className='social-icon'
              >
                {social.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
