import React from 'react';
import { ProgressBar } from '@vaadin/react-components/ProgressBar.js';
import { reactExample } from 'Frontend/demo/react-example'; // hidden-source-line

function Example() {
  return (
    // tag::snippet[]
    <div>
      <ProgressBar value={0.5} />
    </div>
    // end::snippet[]
  );
}

export default reactExample(Example); // hidden-source-line
