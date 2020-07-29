import React, { useState } from 'react'
import { useRecipes } from '../contexts/RecipeContext'

const RecipeForm = () => {
  const { dispatch } = useRecipes()
  const [label, setLabel] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [directions, setDirections] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_RECIPE',
      recipe: {
        label,
        ingredients,
        directions
      }
    })
    setLabel('')
    setIngredients('')
    setDirections('')
  }
  return (
    <div className="recipe-form-container">
      <h2 className="heading">Add a new recipe</h2>
      <form onSubmit={(e) => onSubmitHandler(e)} className="form">
        <input
          type="text"
          placeholder="recipe title"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          required
        />
        <textarea
          placeholder="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        ></textarea>
        <textarea
          placeholder="directions"
          value={directions}
          onChange={(e) => setDirections(e.target.value)}
          required
        ></textarea>
        <button>Add recipe</button>
      </form>
    </div>
  )
}

export default RecipeForm
