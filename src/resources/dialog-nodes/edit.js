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
  TabbedForm,
  FormTab,
  AutocompleteInput,
  BooleanInput,  
} from 'react-admin';
import ConditionInput from '../../components/condition-input';


const DialogNodeEdit = (props) => {
  const t = useTranslate();


  const transform = data => {
    data.conditions = data.conditions || '';

    data.respond.response_type = 'text'
    data.respond.values = data.respond.values.filter(val => !!val);

    return data;
  }


  return (
    <Edit {...props} mutationMode='pessimistic' transform={transform}>
      <TabbedForm>
        <FormTab label={t('resources.dialog-nodes.tabs.general')}>
          <TextInput source="title" lable='resources.intents.fields.title' />
          <TextInput source="description" />

          <BooleanInput label="resources.dialog-nodes.fields.visible_to_user" source="metadata.visible" />

          <SelectInput source='condition_type' choices={[
            { id: 'common', name: 'Common' },
            { id: 'intent', name: 'Intent' },
          ]} />

          <ConditionInput
            source='conditions'
            sort={{ field: 'updated' }}
            reference="intents"
          />            

          {/* <SelectInput source="respond.response_type" value='text' choices={[
            { id: 'text', name: t('choices.response_type.text') },
          ]} /> */}
          <SelectInput source="respond.selection_policy" choices={[
            { id: 'random', name: t('choices.selection_policy.random') },
            { id: 'sequential', name: t('choices.selection_policy.sequential') },
            { id: 'multiline', name: t('choices.selection_policy.multiline') },
          ]} />
        </FormTab>
        <FormTab label={t('resources.dialog-nodes.tabs.responses')}>
          <ArrayInput source="respond.values" label=''>
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