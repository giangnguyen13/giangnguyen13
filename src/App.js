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
        <section style={{ paddingTop: 0 }}>
          <Welcome setActiveSection={setActiveSection} />
        </section>
        <section id='home'>
          <Home setActiveSection={setActiveSection} />
        </section>
        <React.Fragment>
          <Projects setActiveSection={setActiveSection} />
        </React.Fragment>
      </main>
    </>
  );
}

export default App;
