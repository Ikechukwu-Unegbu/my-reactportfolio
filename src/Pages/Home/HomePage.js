import classes from './HomePage.module.css';
// import Header from '../../Components/UI/Header';
import img from '../../assets/images/Ike.jpg';
import Footer from '../../Components/UI/Footer';
import NavigationLayout from '../../Components/Navigation/NavigationLayout';
// import { NavLink } from 'react-router-dom';

const HomePage =()=>{
  return (
    <div className={classes.HomePage}>
      {/* <Header/> */}
      <NavigationLayout/>
      
      <div className={classes.HomePage_Container}>
        <div className={classes.left}>
          <div className={classes.intro_div}>
            <h1 className={classes.h1}>Hi I am...</h1>
            {/* <h1 className={classes.name}>I am Jessica</h1> */}
            <p>
            ...Vincent Ikechukwu, experinced Front End and Back End Software Developer. I work with ReactJs and Laravel. I am currently transitioning into Blockchain with Solidity and C++.
            </p>
            <p>
              My Project page contains "Designs vs My Implementation" for some live projects I have worked on.
              Help yourself on the projects page. 
            </p>
            <p>
            Thanks for stopping by!
            </p>
            <a href='https://cranky-mahavira-d53fe5.netlify.app/resume.html' className={classes.button}>See Resume</a>
          </div>
          <div className={classes.contact_div}>
            <h2>Contacts</h2>
            <div className={classes.contacts}>
              <i class="fas fa-2x fa-envelope-square"></i>
              <p>mr.ikunegbu@gmail.com</p>
            </div>
            <div className={classes.contacts}>
              <i class="fab fa-2x fa-facebook-square"></i>
              <a className={classes.socials_link} href='https://www.behance.net/jessiechidi'>Vincent Ikechukwu</a>
            </div>
            <div className={classes.contacts}>
              <i class="fab fa-2x fa-linkedin"></i>
              <a className={classes.socials_link} href='http://linkedin.com/in/jessiechidi'>Jessie Chidi</a>
            </div>

            
          </div>
        </div>
        
        <div className={classes.right}>
        <img src={img} alt='goes here'/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;