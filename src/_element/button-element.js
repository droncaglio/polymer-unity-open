import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-button/paper-button.js';

class ButtonElement extends PolymerElement {
  static get template() {
    return html`

    <paper-button on-click="handleClick" raised class="indigo">Send to Unity</paper-button>    
   
    `;
  }


  handleClick(e){
    console.log('send0');
    var customEvent = new CustomEvent('sendToUnity', {
      bubbles: true, 
      composed: true,
      detail: ""
    });
    this.dispatchEvent(customEvent);
  }
}
customElements.define('button-element', ButtonElement);