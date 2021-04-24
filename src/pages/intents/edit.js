import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  Create,
  SimpleFormIterator,
  ArrayInput,
} from 'react-admin';

const DialogNodeEdit = (props) => {


  return (<>
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="intent" />
        <TextInput source="description" />
        <ArrayInput source="examples">
          <SimpleFormIterator>
            <TextInput source="text" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  </>);
}


export default DialogNodeEdit;