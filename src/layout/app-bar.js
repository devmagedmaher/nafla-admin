import React, { useEffect, useState } from 'react';
import { AppBar } from 'react-admin';
import { Typography } from '@material-ui/core';
import LanguageMenu from '../components/language-menu';
import WorkspaceBar from '../components/workspace-bar';


const CustomAppBar = (props) => {
  return (<>
    <AppBar {...props} color='primary'>
      {/* <Typography variant='h6' id='react-admin-title' /> */}
      <div style={{ flex: 1 }} />
      <LanguageMenu />
    </AppBar>
    <WorkspaceBar />
  </>);
}


export default CustomAppBar;