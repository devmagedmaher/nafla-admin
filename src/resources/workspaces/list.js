import React, { useEffect, useState } from "react";
import { LOCAL_WORKSPACE_KEY } from '../../constants/config';
import {
  List,
  SimpleList,
} from 'react-admin';


const WorkspaceList = props => {
  const [localWorkspace, setLocalWorkspace] = useState({});


  useEffect(() => {
    const workspace = window.localStorage.getItem(LOCAL_WORKSPACE_KEY);
    if (workspace) {

      try {
        const ws = JSON.parse(workspace);
        setLocalWorkspace(ws);
      }
      catch(error) {
        console.log(error);
      }

    }
  }, [])


  return (
    <List
      {...props}
      exporter={false}
      sort={{ field: 'name', order: 'ASC' }}
    >
      <SimpleList 
        primaryText={record => record.name}
        rowStyle={record => ({
          backgroundColor: localWorkspace.id === record.id ? '#dfd' : '#fff',
        })}
        linkType='show'
      />
    </List>
  );
}


export default WorkspaceList;