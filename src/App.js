import { useState } from 'react'
import AnimalShow from './AnimalShow'
import './App.css'

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']

  return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
  const [animals, setAnimals] = useState([])

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }

  const renderedAnimals = animals.map((animal,i) => {
    return <AnimalShow type={animal} key={i} />
  })

  return (
    <section className='app'>
      <button onClick={handleClick}>Add Animal</button>
      <div className='animal-list'>{renderedAnimals}</div>
    </section>
  )
}

export default App;
