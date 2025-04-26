import React from "react";
import '../styles/style.css';

function SideBar({ isVisible, togglesVisibility }) {
    return (
        <div className={`sideBar ${isVisible ? 'visible' : ''}`}>
            <button onClick={togglesVisibility} className="closeButton">X</button>
            <h2 style={{ textAlign: 'center' }}>Menu</h2>
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>
        </div>
    );
}

export default SideBar;
