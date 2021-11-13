import React from 'react';
import classes from './MainPdf.module.css';

const MainPdf = ()=>{

  return (
    <div>
      {/* <b>Ikechuwkwu</b> */}
      <embed src="./design.pdf" className={classes.iframe} type=""/>
      {/* <iframe className={classes.iframe} title='Resume' src='./resume.pdf'></iframe> */}
    </div>
  )
}

export default MainPdf;