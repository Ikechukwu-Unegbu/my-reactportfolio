import classes from './PdfPage.module.css';

// import pdfAsset from '../../assets/resume.pdf';

const PDFPage =()=>{
  return (
    <div>
         <iframe title='My Resume' className={classes.iframe} src="../../assets/resume.pdf" ></iframe>
    
    </div>
  );
}

export default PDFPage;