import React from 'react'
import { useRecipes } from '../contexts/RecipeContext'
import RecipeDetails from './RecipeDetails'
import { v1 as uuidv1 } from 'uuid'

const Recipes = () => {
  const { recipes } = useRecipes()

  return (
    <div className="recipe-list-container">
      <h2 className="heading">Choose a recipe</h2>
      <ul className="recipesList">
        {recipes.length ? (
          recipes.map((recipe) => (
            <RecipeDetails key={uuidv1()} label={recipe.label} />
          ))
        ) : (
          <div>There are currently no recipes available</div>
        )}
      </ul>
    </div>
  )
}
export default Recipes
