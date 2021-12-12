import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import SelectCategory from './SelectCategory.js'
// import ViewQuestion from ''


let catUrl = "https://opentdb.com/api_category.php"
const questUrl = (catId) => `https://opentdb.com/api_count.php?category=${catId}`

export default function App() {

let [categoryList, setCategoryList] = useState([])
let [currentCategory, setCurrentCategory] = useState(null)


useEffect( () => {
axios
.get(catUrl)
.then((response) => {
  setCategoryList(response.data.trivia_categories)
})
}, []
)

function fetchQuestion(catId) {
  axios
  .get(questUrl(catId))
  .then((response) => {
  console.log(response.data)
  })
  }

return (
  <div>
    <h1>React Trivia!</h1>
    {categoryList.map((category) => (
      <SelectCategory name={category.name} key={category.id} id={category.id} setCurrentCategory={setCurrentCategory} fetchQuestion={fetchQuestion}>
      </SelectCategory>
    ))}
  </div>
)
}