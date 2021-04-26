import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleList,
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';
import TimeAgoField from '../../components/time-ago-field';


const IntentList = props => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    
  return (
    <List
      {...props}
      sort={{ field: 'updated', order: 'DESC' }}
    >
      <Datagrid rowClick='edit'>
        <TextField source="intent" />
        {!isSmall && [
          <TimeAgoField source="created" sortable={false} />,
          <TimeAgoField source="updated" />,
        ]}
        <EditButton />
      </Datagrid>
    </List>
  );
}


export default IntentList;