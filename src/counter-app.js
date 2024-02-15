import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class CounterApp extends LitElement {

  static get tag() {
    return 'counter-app';
  }

  static get properties() {
    return {
      value: { type: Number },
      min: {type: Number},
      max: {type: Number},
      confetti: {type: Boolean},
    };
  }

  constructor() {
    super();
    this.value = 0;
    this.min = 0;
    this.max = 10;
  }

  static get styles() {
    return css`
      :host {
        font-size: 69px;
        font-weight: bold;
        color: white;
        display: block;
      }


      #confetti{
        height: 100%;
        width: 100%;
      }

      .container{
        background-color: white;
        color: black;
        display: block;

        height: 25vw;
        width: 25vw;
        border-radius: 32px;
        margin: 32px;
      }

      .text-area{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 70%;
      }

      .button-area{
        display: flex;

        width: 100%;
        height: 25%;
      }

      .button{
        font-size: 50px;

        color: black;

        display: flex;
        justify-content: center;
        align-items: center;

        height: 100%;
        width: 25%;
        border-radius: 50%;

        margin-left: 12.5%;
        margin-right: 12.5%;

      }

      .button:hover{
          color: rgba(0, 0, 0, .5);
          transition: .1s ease-in-out;
      }

      .red{
        background-color: #EF5350;
      }

      .green{
        background-color: #66BB6A;
      }

      .orange{
        background-color: #9575CD;
      }

      .purple{
        background-color: #FF9800;
      }

      .grey{
        background-color: #BDBDBD;
      }


    `;
  }

  increase(){
    if(this.value < this.max){
        this.value++;
    }    
  }

  decrease(){
    if(this.value > this.min){
        this.value--;
    }

  }

  changeValue(newValue){
    this.value = newValue;
  }

  

  makeItRain() {
    // this is called a dynamic import. It means it won't import the code for confetti until this method is called
    // the .then() syntax after is because dynamic imports return a Promise object. Meaning the then() code
    // will only run AFTER the code is imported and available to us
    import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
      (module) => {
        // This is a minor timing 'hack'. We know the code library above will import prior to this running
        // The "set timeout 0" means "wait 1 microtask and run it on the next cycle.
        // this "hack" ensures the element has had time to process in the DOM so that when we set popped
        // it's listening for changes so it can react
        setTimeout(() => {
          // forcibly set the poppped attribute on something with id confetti
          // while I've said in general NOT to do this, the confetti container element will reset this
          // after the animation runs so it's a simple way to generate the effect over and over again
          this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
        }, 0);
      }
    );
  }



  render() {
    var plusButtonColor = (this.value == this.max) ? "grey" : "green";
    var minusButtonColor = (this.value == this.min) ? "grey" : "red";

    var containerColor = "";
    if(this.value === this.max) { containerColor = "#4DB6AC";}
    if(this.value === this.min) { containerColor = "#FF9100";}
    if(this.value === 18) {containerColor = "#CE93D8";}
    if(this.value === 21) {containerColor = "#EC407A";}


    
    return html`
      
        <div class='container' style='background-color:${containerColor}'>
          <confetti-container id="confetti">
              <div class='text-area'>
                    <div class="number">${this.value}</div>
              </div>
              <div class='button-area'>
                  <button class="button ${minusButtonColor}" @click="${this.decrease}"  ?disabled="${this.min === this.value}">-</button>
                  <button class="button ${plusButtonColor}" @click="${this.increase}" ?disabled="${this.max === this.value}">+</button> 
              </div>
            </confetti-container>
          </div>
          
        `;
  }

  updated(changedProperties) {
    if (changedProperties.has('value')) {
      if(this.confetti && this.value === this.max){
        this.makeItRain();
      }
    }
  }



  
}

globalThis.customElements.define(CounterApp.tag, CounterApp);