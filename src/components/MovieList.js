import React from 'react'


function Movieslist({movieList}) {

console.log(movieList + 'movieslist')
  return (
    <section>
      <ul 
        className='styled w-100 pl-0' 
        data-testid='moviesList'
      >
        {movieList.map(movie => (

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

export default Movieslist;
