import React, { Component } from 'react'
import Recipes from './components/Recipes'
import { RecipeContextProvider } from './contexts/RecipeContext'
import { BrowserRouter } from 'react-router-dom'
import RecipeForm from './components/RecipeForm'
import FullRecipe from './components/FullRecipe'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <RecipeContextProvider>
          <div className="App">
            <div className="container-left">
              <Recipes />
              <RecipeForm />
            </div>
            <div className="container-right">
              <FullRecipe />
            </div>
          </div>
        </RecipeContextProvider>
      </BrowserRouter>
    )
  }
}

export default App
