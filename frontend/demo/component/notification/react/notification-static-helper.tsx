import React from 'react';
import { Button } from '@vaadin/react-components/Button.js';
import { Notification } from '@vaadin/react-components/Notification.js';
import { reactExample } from 'Frontend/demo/react-example'; // hidden-source-line

function Example() {
  function handleTextNotification() {
    // tag::snippet[]
    // Show a simple text-based notification
    Notification.show('Financial report generated', {
      position: 'middle',
    });
    // end::snippet[]
  }

  return <Button onClick={handleTextNotification}>Show text notification</Button>;
}

export default reactExample(Example); // hidden-source-line
