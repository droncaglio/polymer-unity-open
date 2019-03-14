import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '/src/unity-element/unity-element.js';


class CardElement extends PolymerElement {
  static get template() {
    return html`
    
    <p id="demo">Texto recebido da janlea Unity.</p>


    <style include="iron-flex iron-flex-alignment">
      :host {
        display: flex;
      }
      paper-card {
        position: absolute;
        width: 100%;
      }
    </style>

    <paper-card  alt="Falhou :(">
      
    <div class="card-content">
     
      <unity-player unity-content="/UnityWebGL/Build/UnityWebGL.json"></unity-player>
      
     

      </div>

    </paper-card>
    `;
  }
}
customElements.define('card-element', CardElement);