import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-input/paper-input.js';

class InputElement extends PolymerElement {
  static get template() {
    return html`
      <paper-input always-float-label label="Enter text"></paper-input>
    `;
  }
}
customElements.define('input-element', InputElement);