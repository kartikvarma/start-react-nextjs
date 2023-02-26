import { computed, makeAutoObservable, observable } from 'mobx';

class Store {
  pokemons = [];
  filter = '';
  selectedPokemon = null;

  constructor(pokemons, filter, selectedPokemon) {
    makeAutoObservable(this, {
      pokemons: observable,
      filter: observable,
      selectedPokemon: observable,
      filteredPokemon: computed
    });
  }

  setPokemons(pokemons) {
    this.pokemons = pokemons;
  }

  setFilter(filter) {
    this.filter = filter;
  }

  setSelectedPokemon(selectedPokemon) {
    this.selectedPokemon = selectedPokemon;
  }

  get filteredPokemon() {
    return this.pokemons.filter(({ name: { english } }) =>
      english.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase())
    );
  }
}

const store = new Store();

if (typeof window !== 'undefined') {
  fetch('/pokemons.json')
    .then((resp) => resp.json())
    .then((pokemons) => store.setPokemons(pokemons));
}

export default store;
