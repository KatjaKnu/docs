import React from 'react';
import { Details } from '@vaadin/react-components/Details.js';
import { reactExample } from 'Frontend/demo/react-example'; // hidden-source-line

function Example() {
  return (
    // tag::snippet[]
    <Details summary="Members (8)" opened theme="filled">
      <ul>
        <li>Blake Martin</li>
        <li>Caroline Clark</li>
        <li>Avery Torres</li>
        <li>Khloe Scott</li>
        <li>Camila Fisher</li>
        <li>Gavin Lewis</li>
        <li>Isabella Powell</li>
        <li>Zoe Wilson</li>
      </ul>
    </Details>
    // end::snippet[]
  );
}

export default reactExample(Example); // hidden-source-line
