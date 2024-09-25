import React from 'react';
import { SplitLayout } from '@vaadin/react-components/SplitLayout.js';
import { reactExample } from 'Frontend/demo/react-example'; // hidden-source-line
import DetailContent from './detail-content';
import MasterContent from './master-content';
import exampleStyles from './split-layout-example-styles'; // hidden-source-line

function Example() {
  return (
    // tag::snippet[]
    <SplitLayout style={{ maxHeight: '280px' }}>
      <MasterContent style={{ minWidth: '200px', maxWidth: '400px' }} />
      <DetailContent />
    </SplitLayout>
    // end::snippet[]
  );
}

export default reactExample(Example, exampleStyles); // hidden-source-line
