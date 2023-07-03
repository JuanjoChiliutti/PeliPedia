
import '../styles/Card.css'

function Card({ movies }) {
  const hasMovies = movies?.length > 0
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))
  return (
    <div className='movies'>

      {
        hasMovies ?
          (
            <ul className='cards'>
              {
                mappedMovies.map(movie =>
                (<li className='card' key={movie.id}>
                  <h3 className='movie-title'>{movie.title}</h3>
                  <p className='movie-year'>{movie.year}</p>
                  <div className='image-container'>
                    <img src={movie.poster} alt={movie.title} />
                  </div>
                </li>))
              }
            </ul>
          ) : (
            <p>No se encontraron resultados</p>
          )

      }

    </div>
  )
}

export default Card