import { proxy } from 'valtio';
import { Poke } from './types';

export interface Store {
    items: Poke[];
    filterItems: Poke[];
    cart: Poke[];
    searchText: string;
    itemLimit: number;
}

const store = proxy<Store>({
    items: [],
    searchText: "",
    itemLimit: 15,
    filterItems: [],
    cart: []
})

const filter = () => {
    const searchRE = new RegExp(store.searchText, "i");
    return store.items.filter(({name}) => name.match(searchRE))
}

export const load = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${store.itemLimit}`)
    .then(resp => resp.json())
    .then((resp) => {
        store.items = resp['results'].map((item,index) => ({
            id: index+1,
            image: `https://pokeres.bastionbot.org/images/pokemon/${index+1}.png`,
            ...item
        }));
        store.filterItems = filter();
    })
}

export const setSearchText = (text:string) => {
    store.searchText = text;
    store.filterItems = filter();
}

export const addToCart = (item: Poke) => {
    store.cart.push(item); 
}

export default store;