import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';

const APP_ID = "34d187f5";
const APP_API = "91723cb18ae377899fd99c366f7f5099"


class App extends Component {

  
  getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value
    const api_call = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_API}`) ;
    
    const data = await api_call.json();
    console.log("data: ", data);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CELP for Cooking Help</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
      </div>
    )
  }
}

export default App;
