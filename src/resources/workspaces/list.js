import React, { useEffect, useState } from "react";
import { LOCAL_WORKSPACE_KEY } from '../../constants/config';
import {
  List,
  SimpleList,
} from 'react-admin';


const WorkspaceList = props => {
  const [localWorkspace, setLocalWorkspace] = useState(null);


  useEffect(() => {
    const workspace = window.localStorage.getItem(LOCAL_WORKSPACE_KEY);
    if (workspace) {
      setLocalWorkspace(workspace);
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
          backgroundColor: localWorkspace === record.id ? '#dfd' : '#fff',
        })}
        linkType='show'
      />
    </List>
  );
}


export default WorkspaceList;