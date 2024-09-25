import React from 'react';
import { DateTimePicker } from '@vaadin/react-components/DateTimePicker.js';
import { reactExample } from 'Frontend/demo/react-example'; // hidden-source-line

function Example() {
  return (
    // tag::snippet[]
    <DateTimePicker label="Message received" value="2020-06-12T15:45:08" step={1} />
    // end::snippet[]
  );
}

export default reactExample(Example); // hidden-source-line
