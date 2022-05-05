import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemons: [],
    };
    console.log('1');
  }

  componentDidMount() {
    console.log('3');
    fetch('https://pogoapi.net/api/v1/pokemon_rarity.json')
      .then((response) => response.json())
      .then((pokemon) => {
        const uniqueIds = [];

        const unique = pokemon.Legendary.filter((element) => {
          const isDuplicate = uniqueIds.includes(element.pokemon_id);

          if (!isDuplicate) {
            uniqueIds.push(element.pokemon_id);

            return true;
          }

          return false;
        });
        // console.log(unique);
        return unique;
      })
      .then((unique) =>
        this.setState(
          () => {
            return { pokemons: unique };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log('2');
    return (
      <div className='App'>
        {this.state.pokemons.map((pokemon) => {
          return (
            <div key={pokemon.pokemon_id}>
              <h1>{pokemon.pokemon_name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
