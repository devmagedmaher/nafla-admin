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


  const transform = data => {
    data.examples = data.examples.filter(val => !!val);

    return data;
  }


  return (
    <Edit {...props} mutationMode='pessimistic' transform={transform}>
      <TabbedForm>
        <FormTab label={t('resources.intents.tabs.general')}>
          <TextInput source="intent" />
          <TextInput source="description" />
        </FormTab>
        <FormTab label={t('resources.intents.tabs.examples')}>
          <ArrayInput source="examples" label=''>
            <SimpleFormIterator>
              <TextInput source="text" />
            </SimpleFormIterator>
          </ArrayInput>
        </FormTab>
      </TabbedForm>
    </Edit>
  );
}


export default DialogNodeEdit;