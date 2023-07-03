
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Searchbar from './components/Searchbar'

function App() {
  const [movies, setMovies] = useState([])

  return (
    <div className='home'>
      <Searchbar setMovies={setMovies} movies={movies} />
      <Card movies={movies} />
    </div>
  )
}

export default App
