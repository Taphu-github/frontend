import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'; // Import styles


function Navbar() {
  
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            AIDS
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link to="/" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="columns" style={{ fontSize: '1.6rem' }} className={styles.menuhover}>Home</CDBSidebarMenuItem>
            </Link>
            <Link to="/system" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table" style={{ fontSize: '1.6rem' }} className={styles.menuhover}>System</CDBSidebarMenuItem>
            </Link>
            <Link to="/user" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user" style={{ fontSize: '1.6rem' }} className={styles.menuhover}>User</CDBSidebarMenuItem>
            </Link>
            <Link to="/analysis" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line" style={{ fontSize: '1.6rem' }} className={styles.menuhover}> 
                Analytics
              </CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Navbar;