import classes from './SidebarNav.module.css';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const SidebarNav = () => (
  <ul className={classes.SidebarNav}>
      <li><NavLink to="/" className={classes.NavLink}>Home</NavLink></li>
            <li><NavLink to="/projects" className={classes.NavLink}>Projects</NavLink></li>
            <li><NavLink to="/passions" className={classes.NavLink}>Passion</NavLink></li>
            <li><NavLink to="/contacts" className={classes.NavLink}>Contact</NavLink></li>
     
  </ul>
); 

export default SidebarNav;