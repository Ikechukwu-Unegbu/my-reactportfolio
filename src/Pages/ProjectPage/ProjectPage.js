import classes from './ProjectPage.module.css';
// import Header from '../../Components/UI/Header';
import NavigationLayout from '../../Components/Navigation/NavigationLayout';
import Footer from '../../Components/UI/Footer';

// import ProjectCard from '../../Components/UI/ProjectCard';
import { Fragment } from 'react/cjs/react.production.min';
import NewCard from '../../Components/UI/NewCard/NewCard';

const ProjectPage =()=>{
  return (
    <Fragment>
      <div className={classes.ProjectPage}>
        {/* <Header/> */}
        <NavigationLayout/>
        <div className={classes.ProjectPage_Container}>
          <NewCard/>
          <NewCard/>
          <NewCard/>
        </div>
      </div>
    
      <Footer/>
     
    </Fragment>
   
  );
}

export default ProjectPage;