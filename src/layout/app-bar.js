import React from 'react';
import { AppBar } from 'react-admin';
import { Typography } from '@material-ui/core';
import LanguageMenu from '../components/language-menu';


const CustomAppBar = (props) => {
  return (
    <AppBar {...props} color='primary'>
      {/* <Typography variant='h6' id='react-admin-title' /> */}
      <div style={{ flex: 1 }} />
      <LanguageMenu />
    </AppBar>
  );
}


export default CustomAppBar;