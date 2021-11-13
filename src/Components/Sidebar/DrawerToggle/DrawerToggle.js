import React from 'react';

import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => (
    <div className={classes.BreadCrumb} onClick={props.clicked}>
        <div style={{backgroundColor:props.bg}}  className={classes.bread}></div>
        <div style={{backgroundColor:props.bg}}  className={classes.bread}></div>
        <div style={{backgroundColor:props.bg}}  className={classes.bread}></div>
    </div>
);

export default drawerToggle;