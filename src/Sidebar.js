



import React, { useState } from 'react';
import './Sidebar.css'; // Import your CSS file here 
import { AiOutlinePlusSquare, AiOutlineRight, AiOutlineSearch } from "react-icons/ai";

const Dashboard = () => {
  const [isSidebarClosed, setSidebarClosed] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
    if (isSidebarClosed) {
      document.getElementById('a').classList.add('Home')
      document.getElementById('b').classList.remove('hk')
    } else {
      document.getElementById('a').classList.remove('Home')
      document.getElementById('b').classList.add('hk')
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className='body'>
      <nav className={`sidebar ${isSidebarClosed ? 'close' : ''}`}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src="logo.png" alt="" />
            </span>

            <div className="text logo-text">
              <span className="name">Codinglab</span>
              <span className="profession">Web developer</span>
            </div>
          </div>

          <i className={`bx bx-chevron-right toggle  asd`} onClick={toggleSidebar}>  <AiOutlineRight /></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <li className="search-box" onClick={() => setSidebarClosed(false)}>
              <i className='bx bx-search icon'> < AiOutlineSearch /></i>
              <input type="text" placeholder="Search Games..." />
            </li>

            <ul className="menu-links menu-pp">
              <li className="nav-link">
                <a href="#">
                  <i className='bx bx-bar-chart-alt-2 icon'>   <  AiOutlinePlusSquare />  </i>
                  <span className="text nav-text">ADD ITEM</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className='bx bx-bar-chart-alt-2 icon'></i>
                  <span className="text nav-text">Revenue</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className='bx bx-bell icon'></i>
                  <span className="text nav-text">Notifications</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className='bx bx-pie-chart-alt icon'></i>
                  <span className="text nav-text">Analytics</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className='bx bx-heart icon'></i>
                  <span className="text nav-text">Likes</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className='bx bx-wallet icon'></i>
                  <span className="text nav-text">Wallets</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li className="">
              <a href="#">
                <i className='bx bx-log-out icon'></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>

            <li className="mode" onClick={toggleDarkMode}>
              <div className="sun-moon">
                <i className={`bx bx-moon icon moon ${isDarkMode ? 'dark' : ''}`}></i>
                <i className={`bx bx-sun icon sun ${isDarkMode ? 'dark' : ''}`}></i>
              </div>
              <span className="mode-text text">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>

              <div className="toggle-switch">
                <span className={`switch ${isDarkMode ? 'dark' : ''}`}></span>
              </div>
            </li>
          </div>
        </div>
      </nav>


    </div>
  );
};

export default Dashboard;


