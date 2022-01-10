import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import WebsiteDesign from "../images/WebsiteDesign.svg";
import ProductStrategy from "../images/ProductStrategy.svg";
import WebsiteHosting from "../images/WebsiteHosting.svg";
import EBook from "../images/EBook.svg";
import MapleLeaf from "../images/MapleLeaf.svg";

const About = ({ setActiveSection }) => {
  const id = "about";
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
    <>
      <div className='row featurette mt-3' ref={ref}>
        <div className='col-md-7 order-md-2'>
          <p className='lead'>
            My name is Giang, I'm Software Developer and currently reside in
            Canada&nbsp;
            <span>
              <img
                src={MapleLeaf}
                alt='Maple leaf Icon'
                style={{ width: "1.5rem", verticalAlign: "middle" }}
              />
            </span>
            . My background is Computer Science at Centennial College and I have
            2 years of hand-on experience in the software industry.
          </p>
        </div>
        <div className='col-md-5'>
          <img
            src={WebsiteDesign}
            alt='a man with the laptop pointing on the screen design'
          />
        </div>
      </div>
      <div className='row featurette my-5'>
        <div className='col-md-7'>
          <p className='lead'>
            I love to solve the problems, from small to complicated one, and
            working on software development is really gave me lots of chances to
            practice and improve this ability. With my great communication
            skills, I have guild and support other team members to many
            successful projects.
          </p>
        </div>
        <div className='col-md-5 order-md-1'>
          <img src={ProductStrategy} alt='man holding bishop' />
        </div>
      </div>
      <div className='row featurette mb-5'>
        <div className='col-md-7 order-md-2'>
          <p className='lead'>
            I have both experience with the traditional server-side rendering
            method (.NET, Laravel) to single page application (ReactJS, VueJS).
            Apart from these stacks, I always try to learn and experiment new
            technologies like working with the Cloud Services or doing Mobile
            Development.
          </p>
        </div>
        <div className='col-md-5'>
          <img
            src={WebsiteHosting}
            alt='man with laptop in front of computer chip'
          />
        </div>
      </div>
      <div className='row featurette mb-5'>
        <div className='col-md-7'>
          <p className='lead'>
            When I'm not working to the tech-related tasks, I spend my time to
            read books and manga, cook fancy meals, do workout, and watch funny
            things on the internet.
          </p>
        </div>
        <div className='col-md-5'>
          <img src={EBook} alt='man pointing to VR screen with phone' />
        </div>
      </div>
    </>
  );
};

export default About;
