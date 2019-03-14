import { PolymerElement, html } from "../../node_modules/@polymer/polymer/polymer-element.js";
import '/UnityWebGL/Build/UnityLoader.js';
import '/src/_element/button-element.js';
import '/src/_element/input-element.js';

class UnityElement extends PolymerElement {
  static get is() {
    return 'unity-player';
  }

  static get template() {
    return html`

    <button-element></button-element>

        <style>
          :host {
            display: block;

          }
        </style>

        <div id="gameContainer" style=" padding: 100px;"></div> 

        
      `;
  }

  static get properties() {
    return {
      unityContent: {
        type: String,
        value: 'unity-player'
      }
    };
  }

  ready() {
    super.ready();
    console.log('Opening Unity now');
    var gameInstance = UnityLoader.instantiate(this.$.gameContainer, this.unityContent);
    this.addEventListener('sendToUnity', function (e) {
      console.log('send');
      gameInstance.SendMessage('FunctionsGameObject', 'ReceiveFromPolymer', 'any string');
    });
  }

}

window.customElements.define(UnityElement.is, UnityElement);