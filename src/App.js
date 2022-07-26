import React from 'react'
import './App.css'
import 'h8k-components'

import Movieform from './components/MovieForm'
import Search from './components/Search'
import Movieslist from './components/MovieList'

const title = 'Favorite Movie Directory'

function App() {
const [movieList, setMovieList] = React.useState([])
  return (
    <div>
      <h8k-navbar header={ title } />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform setMovieList={ setMovieList} />
        </div>
        <div className='layout-column w-30'>
          <Search movieList={movieList}/>
          <Movieslist movieList={movieList} />
          <div data-testid='noResult'>
            <h3 className='text-center'>No Results Found</h3>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default App;
