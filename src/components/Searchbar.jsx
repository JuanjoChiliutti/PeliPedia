import { useEffect, useRef, useState } from "react"

import '../styles/Searchbar.css'


function Searchbar({ setMovies, movies }) {
  const [input, setInput] = useState('')
  const [errors, setErrors] =useState('')
  
  const isFirstInput = useRef(true)
  function handleChange (event){
    event.preventDefault()
    const value = event.target.value
    if(value.startsWith(' ')) return
    setInput(value)
  }
  useEffect(() => {

    if(isFirstInput.current) {
      isFirstInput.current = input === ''
      return
    }
    if(input.length < 3) {
      setErrors('Al menos debes ingresar 3 caracteres')
      return
    }
    setErrors(null)

  }, [input])
 
  
  function handleSubmit (event){
    event.preventDefault()
    fetch(`https://www.omdbapi.com/?apikey=514ae576&s=${input}`)
    .then(response => response.json())  
    .then(data => setMovies(data.Search))   
  }
  

  return (
    <div><h1>PeliPedia</h1>
    <p className="p-busca">Busca tu pelicula favorita</p>
    <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="The Matrix, Spiderman, Shrek..." value={input} onChange={handleChange}/>
        {errors && <p className="p-error">{errors}</p>}
        <button className="shadow__btn">Buscar</button>
    </form>
    </div>
  )
}

export default Searchbar