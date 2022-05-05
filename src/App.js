import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'Tien', lastName: 'Dao' },
      school: 'Fanshawe college',
    };
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I am a
            student at {this.state.school}
          </p>
          <button
            onClick={() => {
              //Shallow merge object into current state and give new state object
              //Update the state to a different object for re-render
              this.setState(
                (state, props) => {
                  return {
                    name: { firstName: 'Iron', lastName: 'man' },
                  };
                },
                //Callback function that will run only the above function is done
                //When the state is fully updated
                () => {
                  console.log(this.state);
                }
              );
              //the shallow merge happens asynchronous so it is still the old version
              // console.log(this.state);
              //React will batch these different sets of state calls
              //so that it can determine the most optimal strategy for re-rendering the website
              //React will stack changes together and find the more optimal way instead of updating it isolate and independently
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
