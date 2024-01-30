import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import "./home.css";

function Home() {
  const navigate = useNavigate();
  const [selectedNavItem, setSelectedNavItem] = useState(""); // State to track the selected navigation item

  // Function to handle click on navigation items
  const handleNavItemClick = (route) => {
    navigate(route); // Navigate to the specified route
    setSelectedNavItem(route); // Update the selected navigation item
  };

  useEffect(() => {
    navigate("/dashboard");
    setSelectedNavItem("/dashboard"); // Initially set the selected navigation item to '/dashboard'
  }, []);

  return (
    <div>
      <div>
        <div className="dashboard-main-container">
          <div className="dashboard-nav-items-main-container">
            <h1 className="dashboard-head" onClick={() => handleNavItemClick("/dashboard")}>Dashboard</h1>
            <div className="dashboard-nav-items">
              <p className={`nav-item ${selectedNavItem === "/dashboard/users" ? "selected" : ""}`} onClick={() => handleNavItemClick("/dashboard/users")}>Users</p>
              <p className={`nav-item ${selectedNavItem === "/dashboard/allocated" ? "selected" : ""}`} onClick={() => handleNavItemClick("/dashboard/allocated")}>Allocated Booths</p>
              <p className={`nav-item ${selectedNavItem === "/dashboard/reports" ? "selected" : ""}`} onClick={() => handleNavItemClick("/dashboard/reports")}>Reports</p>
            </div>
          </div>
          <div className="line-container">
            <p className="line"></p>
          </div>
          <div className="outlet-container">
            <div className="location-profile-container">
              <div>
                <p className="location-heading">Hyderabad</p>
              </div>
              <div className="profile-container">
                <div className="profile-line-container">
                  <p className="profile-line"></p>
                </div>
                <div>
                  <p className="profile-name">Name</p>
                  <p className="profile-mail">user@gmail.com</p>
                </div>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
