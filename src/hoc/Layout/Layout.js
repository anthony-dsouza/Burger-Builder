import React, {Component} from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    };

    render () {
        return (
            <Aux>
                <Toolbar toggle={this.sideDrawerToggleHandler}/>
                <SideDrawer close={this.sideDrawerClosedHandler} show={this.state.showSideDrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    };
};

export default Layout;