import React, { useState } from "react";
import Sidebar from "./components/SideBar";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("introduction");
  return (
    <>
      <Sidebar activeSection={activeSection} />
      <main id='introduction'>
        <section style={{ paddingTop: 0 }}>
          <Welcome setActiveSection={setActiveSection} />
        </section>
        <section id='home'>
          <h1 className='section-heading'>About me</h1>
          <Home setActiveSection={setActiveSection} />
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
