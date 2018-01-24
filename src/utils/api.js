const API_ID = '8c4e79a1' //process.env.REACT_APP_API_ID
const APP_KEY = '18e021c7c4e4f9b2ba4df90c30cf36a6' //process.env.REACT_APP_APP_KEY

export function fetchRecipes (food = '') {
  // console.log(API_ID, APP_KEY);
  food = food.trim()

  return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))
}
