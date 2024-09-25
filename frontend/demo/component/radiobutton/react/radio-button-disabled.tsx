import React from 'react';
import { RadioButton } from '@vaadin/react-components/RadioButton.js';
import { RadioGroup } from '@vaadin/react-components/RadioGroup.js';
import { reactExample } from 'Frontend/demo/react-example'; // hidden-source-line

function Example() {
  return (
    // tag::snippet[]
    <RadioGroup label="Status" disabled>
      <RadioButton value="inProgress" label="In progress" checked />
      <RadioButton value="done" label="Done" />
      <RadioButton value="cancelled" label="Cancelled" />
    </RadioGroup>
    // end::snippet[]
  );
}

export default reactExample(Example); // hidden-source-line
