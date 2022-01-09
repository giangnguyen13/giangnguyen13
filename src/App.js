import React, { useState } from "react";
import Sidebar from "./components/SideBar";
import Welcome from "./screens/Welcome";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";
import Skills from "./screens/Skills";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <>
      <Sidebar activeSection={activeSection} />
      <main id='home'>
        <section style={{ paddingTop: 0 }}>
          <Welcome setActiveSection={setActiveSection} />
        </section>
        <section id='about'>
          <h1 className='section-heading'>About me</h1>
          <About setActiveSection={setActiveSection} />
        </section>
        <section id='skills'>
          <h1 className='section-heading'>Technical Skills</h1>
          <Skills setActiveSection={setActiveSection} />
        </section>
        <section id='projects'>
          <h1 className='section-heading'>Projects</h1>
          <Projects setActiveSection={setActiveSection} />
        </section>
        <section id='contact' className='text-center'>
          <Contact setActiveSection={setActiveSection} />
        </section>
      </main>
    </>
  );
}

export default App;
