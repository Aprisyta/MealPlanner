export ADD_RECIPE = 'ADD_RECIPE'
export REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

export function addRecipe({ day, recipe, meal }) {
  return {
    type: ADD_RECIPE,
    day,
    recipe,
    meal,
  }
}

export function removeFromCalendar({ day, meal }) {
  return {
    type: REMOVE_FROM_CALENDAR,
    day,
    meal,
  }
}
