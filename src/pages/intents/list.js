import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
} from 'react-admin';
import TimeAgoField from '../../components/time-ago-field';


const IntentList = props => {

    
  return (
    <List
      {...props}
      // title='Intents'
      sort={{ field: 'updated', order: 'DESC' }}
    >
      <Datagrid>
        <TextField source="intent" />
        <TimeAgoField source="created" sortable={false} />
        <TimeAgoField source="updated" />
        <EditButton />
      </Datagrid>
    </List>
  );
}


export default IntentList;