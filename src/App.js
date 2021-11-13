import React, {Fragment} from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './Pages/Home/HomePage';
import MainPdf from './Pages/MainPdf/MainPdf';
import PassionPage from './Pages/PassionPage/PassionPage';
import ProjectPage from './Pages/ProjectPage/ProjectPage';
// import PDFPage from './Pages/PdfPage/PDFPage';
function App() {
  return (
    <Fragment>
      <Switch>
        <Route path='/' exact>
          <HomePage/>
        </Route>
        {/* <Route path='/jess_resumee' exact>
          <PDFPage/>
        </Route> */}
        <Route path='/projects' exact>
          <ProjectPage/>
        </Route>
        <Route path='/my_resume' exact >
          <MainPdf/>
        </Route>
        <Route path='/passions' exact >
          <PassionPage/>
        </Route>
       
      </Switch>
      
    </Fragment>
  );
}

export default App;
