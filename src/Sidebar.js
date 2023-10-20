



import React, { useState } from 'react';
import './Sidebar.css'; // Import your CSS file here 
import { AiOutlinePlusSquare, AiOutlineRight, AiOutlineSearch } from "react-icons/ai";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      document.getElementById('b').classList.add('hk')
    } else {
      document.getElementById('b').classList.remove('hk')
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };



  return (
    <div className='body'>

      <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`} onClick={closeSidebar}>
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

          <i className={`bx bx-chevron-right toggle asd sidebar`}>  <AiOutlineRight /></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
          

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


          </div>
        </div>
      </nav>

      <div
        className={`menu-icon ${isSidebarOpen ? 'hide' : ''}`}
        onClick={toggleSidebar}
      >
        <i>
          <AiOutlineRight />
        </i>
      </div>

      {isSidebarOpen && (
        <div className='overlay' onClick={closeSidebar}></div>
      )}
    </div>


  );
};

export default Dashboard;




