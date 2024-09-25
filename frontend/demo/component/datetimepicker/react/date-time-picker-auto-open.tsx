import React from 'react';
import { DateTimePicker } from '@vaadin/react-components/DateTimePicker.js';
import { reactExample } from 'Frontend/demo/react-example'; // hidden-source-line

function Example() {
  return (
    // tag::snippet[]
    <DateTimePicker label="Meeting date and time" autoOpenDisabled />
    // end::snippet[]
  );
}

export default reactExample(Example); // hidden-source-line
