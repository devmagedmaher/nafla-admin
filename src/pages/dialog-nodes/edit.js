import React from 'react';
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  SimpleFormIterator,
  ArrayInput,
  useTranslate,
} from 'react-admin';

const DialogNodeEdit = (props) => {
  const t = useTranslate();


  return (
    <Edit {...props}>
      <SimpleForm
        submitOnEnter={false}
        redirect={false}
        warnWhenUnsavedChanges
      >
        <TextInput source="title" lable='resources.intents.fields.title' />
        <TextInput source="description" />

        <ReferenceInput
          source='conditions'
          sort={{ field: 'updated' }}
          reference="intents"
        >
          <SelectInput optionText='intent' optionValue='id' />
        </ReferenceInput>

        <SelectInput source="respond.response_type" choices={[
          { id: 'text', name: t('choices.response_type.text') },
        ]} />
        <SelectInput source="respond.selection_policy" choices={[
          { id: 'random', name: t('choices.selection_policy.random') },
          { id: 'sequential', name: t('choices.selection_policy.sequential') },
          { id: 'multiline', name: t('choices.selection_policy.multiline') },
        ]} />
        <ArrayInput source="respond.values">
          <SimpleFormIterator>
            <TextInput source="text" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
}


export default DialogNodeEdit;