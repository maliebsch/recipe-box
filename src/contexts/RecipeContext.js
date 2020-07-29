import React, { createContext, useReducer, useContext, useEffect } from 'react'
import { recipeReducer } from '../reducers/recipeReducer'

export const RecipeContext = createContext()

export const RecipeContextProvider = (props) => {
  const [recipes, dispatch] = useReducer(
    recipeReducer,
    [
      {
        label: 'Guacamole',
        ingredients:
          '1/4 cup finely minced onion, 3 ripe avocados, 1 1/2 tablespoons fresh lime juice (or lemon juice),1 large Plum or Roma tomato, deseeded and diced, 1/4 cup cilantro leaves and tender stems, chopped, 1/2 teaspoon ground cumin, optional, 1/2 teaspoon salt, or more to taste, 1 to 2 teaspoons minced jalapeño or serrano pepper, with seeds and membrane removed, optional',
        directions:
          'Add diced onion to a small bowl then cover with warm water, set aside for 5 minutes then drain. This “de-flames” the onions, making them less intense. Cut avocados in half, lengthwise and remove the pit. Scoop out the flesh and add to a bowl. Add lime juice then use a fork to mash until creamy, but still chunky. Stir in the tomato, cilantro, cumin, drained de-flamed onions, salt, and diced peppers (if using). Taste the guacamole and adjust with additional salt, peppers, or lime juice. Serve immediately or cover with plastic wrap by pushing the plastic wrap down onto the guacamole and refrigerate up to one day.'
      },
      {
        label: 'Broccoli and sage pasta',
        ingredients:
          ' 140g quick-cook spaghetti, 140g long-stem broccoli, Broccoli trimmed and cut into 5cm lengths, 3 tbsp olive oil, 2 shallots, 1 garlic clove, finely chopped, ¼ tsp crushed chillies, 12 shredded sage leaves',
        directions:
          ' Boil the spaghetti for 1 min. Add the broccoli and cook for 4 mins more. Meanwhile, heat the oil in a frying pan and add the shallots and garlic. Gently cook for 5 mins until golden. Add the chillies and sage to the pan and gently cook for 2 mins. Drain the pasta, mix with the shallot mixture in the pan, then scatter with Parmesan, if you like.'
      }
    ],
    () => {
      const localData = localStorage.getItem('recipes')
      return localData ? JSON.parse(localData) : []
    }
  )
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
  }, [recipes])

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        dispatch
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  )
}

// Create a hook to use the APIContext, this is a Kent C. Dodds pattern
export function useRecipes() {
  const context = useContext(RecipeContext)
  console.log(context)
  if (context === undefined) {
    throw new Error('Context must be used within a Provider')
  }
  return context
}
