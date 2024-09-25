import React from 'react';
import { DateTimePicker } from '@vaadin/react-components/DateTimePicker.js';
import { reactExample } from 'Frontend/demo/react-example'; // hidden-source-line

function Example() {
  return (
    // tag::snippet[]
    <DateTimePicker label="Meeting date and time" value="2020-06-12T12:30" step={60 * 30} />
    // end::snippet[]
  );
}

export default reactExample(Example); // hidden-source-line
