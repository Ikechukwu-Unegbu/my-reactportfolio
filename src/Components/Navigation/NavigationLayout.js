import React, { Fragment } from "react";
import { Component } from "react/cjs/react.production.min";
import Toolbar from "./ToolBar/ToolBar";
import SidebarNav from "./SidebarNav/SidebarNav";
import Sidebar from '../Sidebar/Sidebar';

class NavigationLayout extends Component{
  state = {
    showSideDrawer: false
}

sideDrawerClosedHandler = () => {
    this.setState( { showSideDrawer: false } );
}

sideDrawerToggleHandler = () => {
    this.setState( ( prevState ) => {
        return { showSideDrawer: !prevState.showSideDrawer };
    } );
}

  render() {
    return (
    <Fragment>
      <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
      <Sidebar
        open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}>
          <SidebarNav/>
        </Sidebar>
              
    </Fragment>
    )
  }
}

export default NavigationLayout;