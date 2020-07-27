import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Calculator';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <p id="title-p">
          <h3>Elektrik sərfiyyatı hesablayıcı</h3>
        </p>
        <Hello name={this.state.name} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
