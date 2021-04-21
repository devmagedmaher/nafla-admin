import * as React from "react";
import { List, Datagrid, TextField, ReferenceArrayField, SingleFieldList, ChipField } from 'react-admin';

export const DialogNodeList = props => (
    <List
        {...props}
        title='Dialog nodes'
        sort={{ field: 'updated', order: 'DESC' }}
    >  
        <Datagrid>
            <TextField source="title" sortable={false} />
            <TextField source="type" sortable={false} />
            <TextField source="conditions" sortable={false} />
            <TextField source="created" sortable={false} />
            <TextField source="updated" />
        </Datagrid>
    </List>
);