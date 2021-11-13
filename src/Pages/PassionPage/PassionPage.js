import React from 'react';
import NavigationLayout from '../../Components/Navigation/NavigationLayout';
import classes from './PassionPage.module.css';

const PassionPage = ()=>{

  return (
    <div className={classes.PassionPage}>
      <NavigationLayout/>

      <div className={classes.PassionPage_Container}>
        <h2>Blank Page</h2>
      </div>
    </div>
  );
}

export default PassionPage;