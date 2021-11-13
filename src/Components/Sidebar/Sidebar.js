// import Logo from '../../UI/Logo/Logo';
//import NavigationGroup from '../../Navigation/NavigationGroup/NavigationGroup';
import classes from './Sidebar.module.css';
import Backdrop from '../UI/Backdrop/Backdrop';

const Sidebar = ( props ) => {
    let attachedClasses = [classes.Sidebar, classes.Close];
    if (props.open) {
        attachedClasses = [classes.Sidebar, classes.Open];
    }
    return (
        <div>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div style={{right:props.right}} className={attachedClasses.join(' ')}>
                {/* <div className={classes.Logo}>
                    <Logo />
                </div> */}
                <nav>
                    {props.children}
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;