import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
  }

  static get styles() {
    return css`
      /* these three selectors are 
effectively the same tho they 
casecade ever so slightly */
:root, html, body {
  font-size: 16px; 
  --basic-color: navy;
  /* think of this as a
  base font size that all 'em' 
  values will be multiplied by */
}

h1 {
  font-size: 2em;
  margin: 0;
  padding: 0;
}

h3,h4,h5,h6 {
  margin: 8px 0 ;
}

#cardlist {
  display: flex;
  flex-wrap: wrap;
}

.card {
  font-size: 1em;
  display: inline-flex;
  border: 2px solid grey;
  padding: 8px;
  margin: 8px;
  opacity: .8;
  background-color: var(--basic-color);
  transition: .6s all ease-in-out;
}

.card-image {
  width: 200px;
  height: 100%;
}

.card-text {
  width: 300px;
  padding: 0 8px 8px 8px;
  color: black;
  background-color: white;
  margin: 0 0 0 8px;
  height: 300px;
  overflow: auto;
}

.card-title {
  position: sticky;
  top: 0;
  background-color: #eeeeee;
  text-align: center;
  font-size: 2em;
  padding: 8px 8px 16px;
  margin: 0 -8px;
}

ul {
  margin: 0;
  padding: 0 32px;
}

ul li {
  padding: 8px 16px;
  list-style: square;
}

ul li:hover {
  list-style: "🤯";
  font-weight: bold;
  cursor: help;
}

a {
  text-decoration: none;
}

.links li:focus-within,
.links li:hover {
  list-style: "🃏";
  background-color: purple;
  color: blue;
}
.links li a:focus,
.links li:hover a {
  color: green;
  text-decoration: underline;
  cursor: move;
  outline: none;
}

ul li:nth-child(odd) {
  background-color: #eeeeee;
}

ul li:nth-child(even) {
  background-color: #dddddd;
}

.card:hover,
.card:focus-within {
  opacity: 1;
  outline: 2px solid green;
  outline-offset: 16px;
}
    `;
  }

  render() {
    return html`
    
    <div class="card">
        <img class="card-image" alt="Github profile photo of the prof" src="https://github.com/btopro.png" />
        <div class="card-text">
          <h3 class="card-title">Professor btopro</h3>
          <div class="card-details">
            <p>
            Professor bto-pro has woken up for 15 years 
            with a purpose. He gets in his small car, drives
            the same <strong>tired and boring ~10 minutes 
            to campus</strong>, parks, saunters into his 
            office.Then, <em>after rigging up the right
          playlist</em> and <strike>too much</strike>
          caffine, cranks out ridiculous open source 
          web code.
          </p>
          <h4>The goals</h4>
          <ul>
            <li>Change web publishing in simplicity
              and ubiquity</li>
            <li>Bend the cost of education toward
              0 away from infinity.</li>
            <li>Change the web, change the world.</li>
          </ul>
          <h4>Places to learn more</h4>
          <ul class="links">
            <li>
              <a href="https://haxtheweb.org">
              HAX [the] WEB</a>
            </li>
            <li>
              <a href="https://hax.psu.edu">
              HAX [dot] PSU</a>
            </li>
            <li>
              <a href="https://linkedin.com/in/btopro">
              [at]btopro
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    
    
    `;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);