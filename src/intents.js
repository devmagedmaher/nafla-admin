import * as React from "react";
import { List, Datagrid, TextField, ReferenceArrayField, SingleFieldList, ChipField } from 'react-admin';

export const IntentList = props => (
    <List
        {...props}
        title='Intents'
        sort={{ field: 'updated', order: 'DESC' }}
    >  
        <Datagrid>
            <TextField source="intent" />
            <TextField source="created" sortable={false} />
            <TextField source="updated" />
        </Datagrid>
    </List>
);