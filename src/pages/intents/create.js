import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
} from 'react-admin';


const IntentCreate = (props) => {


  return (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="intent" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
  )
}


export default IntentCreate;