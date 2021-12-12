import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import SelectCategory from './SelectCategory.js'
// import ViewQuestion from ''


let catUrl = "https://opentdb.com/api_category.php"
let questUrl = "https://opentdb.com/api_count.php?category=${catId}"

export default function App() {

let [category, setCategory] = useState([])
let [currentCategory, setCurrentCategory] = useState(null)


useEffect( () => {
axios
.get(catUrl)
.then((response) => {
  setCategory(response.data.trivia_categories.map((category) => category.name))
})
}, []
)
function fetchQuestion(catId) {
  axios
  .get(questUrl)
  .then((response) => {
  console.log(response.data)
  })
  }

return (
  <div>
    <h1>React Trivia!</h1>
    {category.map((category) => (
      <SelectCategory name={category.name} key={category.index} id={category.id} setCurrentCategory={setCurrentCategory} fetchQuestion={fetchQuestion}>
      </SelectCategory>
    ))}
  </div>
)
}