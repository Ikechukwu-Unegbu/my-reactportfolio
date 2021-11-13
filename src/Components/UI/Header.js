// import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';


function Header(){


  return (
    <div className={classes.Header}>
     <div className={classes.left}>
        {/* <NavLink to='' className={classes.NavLink}>
          <p>Chidi Jessie</p>
        </NavLink> */}
      </div>
      <div className={classes.right}>
        <nav className={classes.Nav}>
          <ul className={classes.Ul}>
         
            <li><NavLink to="/" className={classes.NavLink}>Home</NavLink></li>
            <li><NavLink to="/projects" className={classes.NavLink}>Projects</NavLink></li>
            <li><NavLink to="/passions" className={classes.NavLink}>Passion</NavLink></li>
            <li><NavLink to="/contacts" className={classes.NavLink}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
   
    </div>
  );
}

export default Header;