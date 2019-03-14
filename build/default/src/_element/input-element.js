import { PolymerElement, html } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/paper-input/paper-input.js";

class InputElement extends PolymerElement {
  static get template() {
    return html`
      <paper-input always-float-label label="Enter text"></paper-input>
    `;
  }

}

customElements.define('input-element', InputElement);