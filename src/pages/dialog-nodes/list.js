import React from "react";
import { List, Datagrid, TextField, EditButton } from 'react-admin';
import TimeAgoField from '../../components/time-ago-field';


const DialogNodeList = props => {


  return (
    <List
      {...props}
      // title='Dialog nodes'
      sort={{ field: 'updated', order: 'DESC' }}
    >  
      <Datagrid>
        <TextField source="title" sortable={false} />
        <TimeAgoField source="created" sortable={false} />
        <TimeAgoField source="updated" />
        <EditButton />
      </Datagrid>
    </List>
  );
}


export default DialogNodeList;