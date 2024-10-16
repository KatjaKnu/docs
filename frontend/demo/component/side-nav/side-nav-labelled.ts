import 'Frontend/demo/init'; // hidden-source-line
import '@vaadin/icon';
import '@vaadin/icons';
import '@vaadin/side-nav';
import '@vaadin/vertical-layout';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { patchSideNavNavigation } from 'Frontend/demo/component/side-nav/side-nav-helper'; // hidden-source-line
import { applyTheme } from 'Frontend/generated/theme';

@customElement('side-nav-labelled')
export class Example extends LitElement {
  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  /* prettier-ignore */ protected firstUpdated() { // hidden-source-line
    patchSideNavNavigation(this.shadowRoot!.querySelector('vaadin-side-nav:first-child')!); // hidden-source-line
    patchSideNavNavigation(this.shadowRoot!.querySelector('vaadin-side-nav:nth-child(2)')!); // hidden-source-line
  } // hidden-source-line

  protected override render() {
    return html`
      <div class="side-nav-sample">
        <!-- tag::snippet[] -->
        <vaadin-vertical-layout theme="spacing">
          <vaadin-side-nav style="width:100%">
            <span slot="label">Messages</span>
            <vaadin-side-nav-item path="/inbox">
              <vaadin-icon icon="vaadin:inbox" slot="prefix"></vaadin-icon>
              Inbox
            </vaadin-side-nav-item>
            <vaadin-side-nav-item path="/sent">
              <vaadin-icon icon="vaadin:paperplane" slot="prefix"></vaadin-icon>
              Sent
            </vaadin-side-nav-item>
            <vaadin-side-nav-item path="/trash">
              <vaadin-icon icon="vaadin:trash" slot="prefix"></vaadin-icon>
              Trash
            </vaadin-side-nav-item>
          </vaadin-side-nav>

          <vaadin-side-nav collapsible style="width:100%">
            <span slot="label">Admin</span>
            <vaadin-side-nav-item path="/users">
              <vaadin-icon icon="vaadin:group" slot="prefix"></vaadin-icon>
              Users
            </vaadin-side-nav-item>
            <vaadin-side-nav-item path="/permissions">
              <vaadin-icon icon="vaadin:key" slot="prefix"></vaadin-icon>
              Permissions
            </vaadin-side-nav-item>
          </vaadin-side-nav>
        </vaadin-vertical-layout>
        <!-- end::snippet[] -->
      </div>
    `;
  }
}
