import React from 'react';
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  AutocompleteInput,
} from 'react-admin';


const DialogNodeCreate = (props) => {


  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="description" />

        <ReferenceInput
          source='conditions'
          sort={{ field: 'updated', order: 'DESC' }}
          reference="intents"
        >
          {/* <SelectInput optionText='intent' optionValue='id' /> */}
          <AutocompleteInput optionText='intent' optionValue='id' />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}


export default DialogNodeCreate;