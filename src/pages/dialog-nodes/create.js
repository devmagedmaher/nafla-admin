import React from 'react';
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  AutocompleteArrayInput,
  useTranslate,
} from 'react-admin';


const DialogNodeCreate = (props) => {
  const translate = useTranslate();


  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="description" />

        <ReferenceInput
          source='conditions'
          sort={{ field: 'updated' }}
          reference="intents"
        >
          <SelectInput optionText='intent' optionValue='id' />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}


export default DialogNodeCreate;