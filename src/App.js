import React from "react";
import Sidebar from "./components/SideBar";
import Home from "./screens/Home";
function App() {
  return (
    <>
      <Sidebar />
      <main id='container'>
        <Home />
      </main>
    </>
  );
}

export default App;
