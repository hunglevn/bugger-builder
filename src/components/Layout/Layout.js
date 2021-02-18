import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary'
import classes from './Layout.css';
const Layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, Side Drawer, Backdrop</div>
            <main className={classes.Content}> {props.children} </main>
        </Aux>
    );
}

export default Layout;