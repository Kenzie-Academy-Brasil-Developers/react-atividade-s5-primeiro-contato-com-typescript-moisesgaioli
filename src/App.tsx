import React from 'react';
import './App.css';
import Card from './Card';
import { Form } from './Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <Card />
      </header>
    </div>
  );
}

export default App;
