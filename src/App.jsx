import React from 'react';
import SimpleForm from './SimpleForm';
import AdvancedForm from './AdvancedForm';
import TodoFetch from './TodoFetch';
import PokemonFetcher from './PokemonFetcher';
import TodoAxios from './TodoAxios';
import PokemonAxios from './PokemonAxios';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Demo React Form</h1>
      <PokemonAxios/>
      </header>
    </div>
  );
}

export default App;