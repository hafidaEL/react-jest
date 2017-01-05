import React, { Component } from 'react';
import './App.css';
import Link from './Link';
import CheckboxWithLabel from './CheckboxWithLabel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          exemple 
        </p>
        <Link page="http://hafida.com">MON LIEN</Link>

        <Link>Lien sans page</Link>

        un checkbox special : 

        <CheckboxWithLabel labelOn="ON" labelOff="OFF" />
      </div>
    );
  }
}

export default App;
