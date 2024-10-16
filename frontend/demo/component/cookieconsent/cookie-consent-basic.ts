import 'Frontend/demo/init'; // hidden-source-line
import './example-cleanup'; // hidden-source-line
import '@vaadin/cookie-consent';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('cookie-consent-basic')
export class Example extends LitElement {
  protected override render() {
    return html`
      <!-- tag::snippet[] -->
      <vaadin-cookie-consent></vaadin-cookie-consent>
      <!-- end::snippet[] -->
    `;
  }
}
