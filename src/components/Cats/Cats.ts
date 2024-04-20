import { getCats } from "../../data/dataFetch";
import { getTexto } from "../../data/getText";

import stylesCats from "./Cats.css"

export enum AttributeCat {
    'fact' = 'fact',
    'img' = 'img',
}

class gatoImg extends HTMLElement {
    fact?: string;
    img?: string;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){
        this.mount();
    }

    mount() {
        this.render()
    }

    static get observedAttributes() {
        const attrs: Record<AttributeCat, null> = {
            fact: null,
            img: null
        };
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName: AttributeCat, oldValue: string | undefined, newValue: string | undefined) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
}
render() {
    if (this.shadowRoot) {
        this.shadowRoot.innerHTML = '';

        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``

            const catSection = this.ownerDocument.createElement('section');
            catSection.className = 'cat-section'

            const button = this.ownerDocument.createElement("button");
            button.textContent = 'Get New Facts!';
}
}
}
}


export default gatoImg;
customElements.define('cats-card', gatoImg);