import React from 'react';
import classes from './BreadCrumb.module.css';

const BreadCrumb = ()=>{
  return (
    <div className={classes.BreadCrumb}>
      <div className={classes.bread}></div>
      <div className={classes.bread}></div>
      <div className={classes.bread}></div>
    </div>
  );
}

export default BreadCrumb;