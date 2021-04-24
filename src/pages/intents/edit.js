import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  SimpleFormIterator,
  ArrayInput,
} from 'react-admin';

const DialogNodeEdit = (props) => {


  return (<>
    <Edit {...props}>
      <SimpleForm
        submitOnEnter={false}
        redirect={false}
        warnWhenUnsavedChanges
      >
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