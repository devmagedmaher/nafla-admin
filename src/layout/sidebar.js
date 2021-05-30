import React from 'react';
import {
    Sidebar as RASidebar
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useSidebarStyles = makeStyles({
    drawerPaper: {
        // backgroundColor: '#eee',
        // boxShadow: '13px 0px 17px -21px #999 inset',
    },
});

const Sidebar = props => {
    const classes = useSidebarStyles();
    return (
        <RASidebar classes={classes} {...props} />
    );
};

export default Sidebar;