import React from 'react'
import { useRecipes } from '../contexts/RecipeContext'
import DeleteIcon from '@material-ui/icons/Delete'

const RecipeDetails = (props) => {
  const recipes = useRecipes()
  const showRecipe = (e) => {
    const label = e.target.id
    recipes.recipes.filter((recipe) => {
      if (recipe.label === label) {
        const html = `<h2 class="heading">${recipe.label}</h2><div class="ingredients"><h3 class="heading">Ingredients</h3>${recipe.ingredients}
        </div><div class="directions"><h3 class="heading">Directions</h3>${recipe.directions}</div>`

        document.getElementsByClassName('full-recipe')[0].innerHTML = html
        document
          .getElementsByClassName('full-recipe')[0]
          .setAttribute('style', 'display:block')
      }
      return null
    })
  }
  const { dispatch } = useRecipes()
  const deleteRecipe = (e) => {
    dispatch({
      type: 'REMOVE_RECIPE',
      label: e.currentTarget.id
    })
    document.getElementsByClassName('full-recipe')[0].innerHTML = ''
    document
      .getElementsByClassName('full-recipe')[0]
      .setAttribute('style', 'display:none')
  }
  return (
    <li
      key={props.label}
      id={props.label}
      className="list-item"
      onClick={(e) => {
        showRecipe(e)
      }}
    >
      {props.label}

      <span
        className="delete"
        id={props.label}
        onClick={(e) => deleteRecipe(e)}
      >
        <DeleteIcon />
      </span>
    </li>
  )
}

export default RecipeDetails
