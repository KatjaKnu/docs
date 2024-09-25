import React from 'react';
import { RadioButton } from '@vaadin/react-components/RadioButton.js';
import { RadioGroup } from '@vaadin/react-components/RadioGroup.js';
import { reactExample } from 'Frontend/demo/react-example'; // hidden-source-line

function Example() {
  return (
    // tag::snippet[]
    <RadioGroup label="Travel class" theme="vertical">
      <RadioButton value="economy" label="Economy" />
      <RadioButton value="business" label="Business" />
      <RadioButton value="firstClass" label="First Class" />
    </RadioGroup>
    // end::snippet[]
  );
}

export default reactExample(Example); // hidden-source-line
