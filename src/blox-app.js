import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
/**
 * @customElement
 * @polymer
 */
class BloxApp extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
      </style>
      <div class="container">
        <h1>{{title}}</h1>

      </div>
    `;
  }

  static get properties() {
    return {
      title: {
        type: String,
        value: 'EOS Keypair Generator'
      }
    };
  }

} window.customElements.define('blox-app', BloxApp);
