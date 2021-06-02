import React, { useEffect, useState } from 'react';
import { LOCAL_WORKSPACE_KEY } from '../constants/config';
import { Card, Typography, Link } from '@material-ui/core';
import { Button } from 'react-admin';


const WorkspaceBar = (props) => {
  const [workspace, setWorkspace] = useState({});


  const getUpdatedLocalStorage = () => {
    console.log('storage event');
    const workspace = window.localStorage.getItem(LOCAL_WORKSPACE_KEY);
    if (workspace) {

      try {
        const ws = JSON.parse(workspace);
        setWorkspace(ws);
      }
      catch(error) {
        console.log(error);
      }

    }
  }

  useEffect(() => {
    getUpdatedLocalStorage();
  }, [])


  return (
    <Card style={{
      textAlign: 'center',
      padding: 10,
    }}>
      <Typography style={{
        fontWeight: 'bold',
        color: '#555',
      }}>{workspace.name}</Typography>
    </Card>
  );
}


export default WorkspaceBar;