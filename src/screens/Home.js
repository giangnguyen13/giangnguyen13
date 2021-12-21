import React from "react";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div>
      <SideBar />
      <div className='p-5 mb-4 bg-light rounded-3'>
        <div className='container-fluid py-5'>Container</div>
      </div>
    </div>
  );
};

export default Home;
