import "./components/export"
import { getTexto } from "./data/getText";
import { getCats } from "./data/dataFetch";
import gatoImg from "./components/export";

class AppContainer extends HTMLElement {
    FavoriteFacts: any[] = []
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        const dataFetch = await getCats('dios sabe que lo intenté');
        const dataTexto = await getTexto();
        console.log(dataTexto);
        console.log(dataFetch);
        
        this.render(dataTexto);
        this.render(dataFetch);
        
    

        const button = this.ownerDocument.createElement("button");
				button.className = 'favorite-button'
            	button.textContent= 'AddFavorite'
				button.addEventListener('click', () => {
                    const FavoriteFacts = this.ownerDocument.createElement('cats-card') as gatoImg;
                });
    }

    render(dataTexto:any, dataFetch:any) {
        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)