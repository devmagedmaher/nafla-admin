import React, { useEffect } from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
} from 'react-admin';


const IntentList = props => {

    
  return (
    <List
      {...props}
      title='Intents'
      sort={{ field: 'updated', order: 'DESC' }}
    >
      <Datagrid>
        <TextField source="intent" />
        <TextField source="created" sortable={false} />
        <TextField source="updated" />
        <EditButton />
      </Datagrid>
    </List>
  );
}


export default IntentList;