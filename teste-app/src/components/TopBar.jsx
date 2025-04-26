import React, { useState } from 'react';
import '../styles/style.css';
import SideBar from './SideBar';

function TopBar() {
  const [isVisible, setIsVisible] = useState(false);

  const togglesVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='topBar'
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(118, 145, 196)",
        padding: "8px 16px",
        borderRadius: "10px",
        border: "1px solid rgb(0, 0, 0)",
        borderBottom: "4px solid rgb(0, 0, 0)",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        color: "rgb(22, 24, 143)",
      }}
    >
      <h1>Olá Jovem</h1>
      <div>
        <button className="topBarButton" onClick={togglesVisibility}></button>
      </div>
      <SideBar isVisible={isVisible} togglesVisibility={togglesVisibility} />
    </div>
  );
}

export default TopBar;
