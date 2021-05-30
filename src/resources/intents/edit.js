import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  SimpleFormIterator,
  ArrayInput,
  useTranslate,
  TabbedForm,
  FormTab,
} from 'react-admin';

const DialogNodeEdit = (props) => {
  const t = useTranslate();


  return (
    <Edit {...props} mutationMode='pessimistic'>
      <TabbedForm>
        <FormTab label={t('resources.intents.tabs.general')}>
          <TextInput source="intent" />
          <TextInput source="description" />
        </FormTab>
        <FormTab label={t('resources.intents.tabs.examples')}>
          <ArrayInput source="examples">
            <SimpleFormIterator>
              <TextInput source="text" />
            </SimpleFormIterator>
          </ArrayInput>
        </FormTab>
      </TabbedForm>
    </Edit>
  )
  return (
    <Edit {...props} mutationMode='pessimistic'>
      <SimpleForm submitOnEnter={false}>
        <TextInput source="intent" />
        <TextInput source="description" />
        <ArrayInput source="examples">
          <SimpleFormIterator>
            <TextInput source="text" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
}


export default DialogNodeEdit;