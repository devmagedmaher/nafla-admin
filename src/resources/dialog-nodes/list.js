import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleList,
  BooleanField,
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';
import TimeAgoField from '../../components/time-ago-field';
import moment from "moment";


const DialogNodeList = props => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));


  return (
    <List
      {...props}
      exporter={false}
    >
      {isSmall ? (
        <SimpleList
          primaryText={record => record.title}
          secondaryText={record => record.description}
          tertiaryText={record => (
            moment(record.updated).fromNow()
          )}
        />
      ) : (
        <Datagrid rowClick='edit'>
          <TextField source="title" sortable={false} />
          <BooleanField label='resources.dialog-nodes.fields.visible_to_user' source="metadata.visible" sortable={false} />
          <TimeAgoField source="created" sortable={false} />,
          <TimeAgoField source="updated" />,
          <EditButton />
        </Datagrid>        
      )}
    </List>
  );
}


export default DialogNodeList;