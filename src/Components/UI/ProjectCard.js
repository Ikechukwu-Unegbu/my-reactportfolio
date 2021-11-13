// import React from 'react';
import classes from './ProjectCard.module.css';
import jess from '../../assets/images/jessie.jpg';

const ProjectCard = ()=>{
  return(
    <div className={classes.ProjectCard}>
     
      <div className={classes.left}>
        <div className={classes.left_left}>
          <div className={classes.title_div}>
            <h1>ChiliPay</h1>
            <h2>Aux Case Study</h2>
          </div>
          <p>
            ChiliPay is an app that helps individuals conduct seamless 
              transactions from the comfort of their homes. It provides a zero-fee 
              banking service, thereby giving individuals secure access to bank 
              safely without the worries of exorbitant bank fees. Users will be able 
              to use the app to save time,money and effort, unlike most 
              traditional banking system.
          </p>
          <div className={classes.role_div}>
            <h3>My Role</h3>
            <div className={classes.roles}>
              <span>Research</span>
              <span>Wireframe</span>
              <span>User Flow</span>
              <span>User Persona</span>
              <span>UI Design</span>
              <span>User Interviews</span>
            </div>
          </div>
          <button className={classes.btn}>See Full Case Study</button>
        </div>
      </div>
      <div className={classes.right}>
        <img className={classes.img} src={jess} alt='goes here'/>
      </div>
    </div>
  )
}

export default ProjectCard;