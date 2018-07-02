import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import 'blox-keypair';
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
      <blox-keypair id="keypair"></blox-keypair>
      <div class="container">
        <h1>{{title}}</h1>
        <input type="text" class="text" placeholder="EOS Public Key" id="publicKey">
        <input type="text" class="text" placeholder="EOS Private Key" id="privateKey">
        <button class="btn-main" on-click="makeKeyPair">Make Key Pair</button>
      </div>
    `;
  }

  makeKeyPair(){
    this.$.keypair.generate()
    .then((keypair) => {
      this.shadowRoot.querySelector('#publicKey').value = keypair[0].publicKey;
      this.shadowRoot.querySelector('#privateKey').value = keypair[0].privateKey;
    })
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
