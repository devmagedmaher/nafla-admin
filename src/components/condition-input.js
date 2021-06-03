import React from 'react';
import {
  SelectInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import { useFormState } from 'react-final-form';


const ConditionInput = (props) => {
  const { values } = useFormState();
  

  return values.condition_type === 'common' ? (
    <SelectInput source='conditions' choices={[
      { id: 'welcome', name: 'Welcome' },
      { id: 'anything_else', name: 'Anything else' },
    ]} {...props}/>
  ) : values.condition_type === 'intent' ? (
    <ReferenceInput
      {...props}
    >
      <AutocompleteInput
        optionText='intent'
        optionValue='id'
        clearAlwaysVisible
        resettable
        allowEmpty
      />
    </ReferenceInput>
  ) : (
    null
  );
}


export default ConditionInput;