import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemons: [
        {
          name: 'Yveltal',
        },
        {
          name: 'Reshiram',
        },
        {
          name: 'Solgaleo',
        },
        {
          name: 'Zekrom',
        },
      ],
    };
  }

  render() {
    return (
      <div className='App'>
        {this.state.pokemons.map((pokemon) => {
          return <h1>{pokemon.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
