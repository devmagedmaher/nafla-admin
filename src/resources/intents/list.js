import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleList,
  CloneButton,
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';
import TimeAgoField from '../../components/time-ago-field';
import moment from "moment";


const IntentList = props => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    
  return (
    <List
      {...props}
      exporter={false}
    >
      {isSmall ? (
        <SimpleList
          primaryText={record => record.intent}
          secondaryText={record => record.description}
          tertiaryText={record => (
            moment(record.updated).fromNow()
          )}
        />
      ) : (
        <Datagrid rowClick='edit'>
          <TextField source="intent" />
          <TimeAgoField source="created" sortable={false} />,
          <TimeAgoField source="updated" />,
          <EditButton />
        </Datagrid>        
      )}
    </List>
  );
}


export default IntentList;