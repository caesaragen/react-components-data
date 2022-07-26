import React from 'react'

function Search({movieList, setMovieList}) {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [searchResults, setSearchResults] = React.useState([])
  const [noResults, setNoResults] = React.useState(false)
  const search = (e) => {
    e.preventDefault()
    const results = movieList.filter(movie => movie.name.toLowerCase().includes(searchTerm.toLowerCase()))
    if (results.length === 0) {
      setNoResults(true)
    } else {
      setNoResults(false)
    }
    setSearchResults(results)
    console.log(results)
  }

  return (
    <section className='layout-row justify-content-center mb-40'>
      <input 
        type='text'
        placeholder='Search for movie by name' 
        className='w-75 py-2'
        data-testid='search'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        onKeyPress={search}
      />
      <button

        className='btn btn-primary'

        onClick={search}
        data-testid='searchButton'
      >
        Search
      </button>
      <ul className='styled w-100 pl-0' data-testid='searchResults'>
        {searchResults.map(movie => (
          <li
            className='flex slide-up-fade-in justify-content-between'
            style={{ borderBottom: '2px solid var(--primary-color)' }}
          >
            <div className='layout-column w-40'>
              {movie.name}
              <h3 className='my-3'></h3>
              {movie.rating}
              <p className='my-0'></p>
            </div>
            <div className='layout-row my-auto mr-20'>
              {movie.duration}
              <p className='justify-content-end'></p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Search
