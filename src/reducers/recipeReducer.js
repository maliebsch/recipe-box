import { v1 as uuidv1 } from 'uuid'

export const recipeReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_RECIPES':
      return action.recipes

    case 'ADD_RECIPE':
      return [
        ...state,
        {
          label: action.recipe.label,
          ingredients: action.recipe.ingredients,
          directions: action.recipe.directions,
          id: uuidv1()
        }
      ]
    case 'REMOVE_RECIPE':
      return state.filter((recipe) => recipe.label !== action.label)
    default:
      return state
  }
}
