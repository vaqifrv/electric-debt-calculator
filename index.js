import React, { Component } from 'react';
import { render } from 'react-dom';
import Calculator from './Calculator';
import './style.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <p id="title-p">
          <h3>Elektrik sərfiyyatı hesablayıcı</h3>
        </p>
        <Calculator/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
