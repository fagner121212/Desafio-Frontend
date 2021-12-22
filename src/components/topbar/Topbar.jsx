import React from 'react'
import './topbar.css'
import Logotype from '../../assets/images/Logotype.png'
import { Link, useHistory } from 'react-router-dom'
import { SearchContext } from '../../providers/search'

function Topbar() {
  const { setSearch, setResultsLoader } = React.useContext(SearchContext)
  const history = useHistory()
  return (
    <div className='top'>
      <div className='top-logo'>
        <Link to='/'>
          <img
            src={Logotype}
            alt='Logo do The Git Search'
            width='78'
            height='36'
          />
        </Link>
      </div>

      <div className='search-bar'>
        <input id='campo-busca' type='text' placeholder='Pesquisar' />

        <button
          onClick={(e) => {
            setResultsLoader(true)
            setSearch(document.querySelector('#campo-busca').value)
            history.push('/results')
          }}
        >
          <i className='fal fa-search search-icon'></i>
        </button>
      </div>
    </div>
  )
}

export default Topbar