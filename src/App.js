import React, { useState } from "react";
import Sidebar from "./components/SideBar";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
function App() {
  const [activeSection, setActiveSection] = useState("introduction");
  return (
    <>
      <Sidebar activeSection={activeSection} />
      <main id='introduction'>
        <section>
          <Welcome setActiveSection={setActiveSection} />
        </section>
        <section id='home'>
          <Home setActiveSection={setActiveSection} />
        </section>
        <section id='projects'>
          <Projects setActiveSection={setActiveSection} />
        </section>
      </main>
    </>
  );
}

export default App;
