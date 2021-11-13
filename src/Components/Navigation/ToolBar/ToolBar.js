import React from 'react';
import Header from '../../UI/Header';
import classes from './ToolBar.module.css';
import DrawerToggle from '../../Sidebar/DrawerToggle/DrawerToggle';
import { NavLink } from 'react-router-dom';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <NavLink to='' className={classes.NavLink}>
          <p>Chidi Jessie</p>
        </NavLink>
        <nav className={classes.DesktopOnly}>
          <Header/>
        </nav>
        <nav className={classes.mobileOnly}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
        </nav>
    </header> 
);

export default toolbar; 