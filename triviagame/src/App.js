import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';


export default function App() {
  let [category, setCategory] = useState([])
  let catUrl = "https://opentdb.com/api_category.php"


useEffect( () => {
  axios
  .get(catUrl)
  .then((response) => {
    setCategory(response.data.trivia_categories.map((category) => category.name))
  })
}, [])

return (
  <div>
    {category.map((name, index) => (
      <p>
        {name} {index}
      </p>
    ))}
  </div>
)
}