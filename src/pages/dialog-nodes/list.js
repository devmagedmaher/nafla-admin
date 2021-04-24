import React from "react";
import { List, Datagrid, TextField, EditButton } from 'react-admin';


const DialogNodeList = props => {


  return (
    <List
      {...props}
      title='Dialog nodes'
      sort={{ field: 'updated', order: 'DESC' }}
    >  
      <Datagrid>
          <TextField source="title" sortable={false} />
          <TextField source="created" sortable={false} />
          <TextField source="updated" />
          <EditButton />
      </Datagrid>
    </List>
  );
}


export default DialogNodeList;