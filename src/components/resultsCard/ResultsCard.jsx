import React from 'react'
import { SearchContext } from '../../providers/search'
import './resultsCard.css'
function ResultsCard({ login, html_url, score, avatar_url, id }) {
  const { setUserIdAndLogin, setModalLoader } = React.useContext(SearchContext)

  const abreModal = (e) => {
    e.preventDefault()
    const modal = document.querySelector('.modal')

    modal.style.display = 'block'
  }

  return (
    <div className='card'>
      <img src={avatar_url} alt='' />
      <h2>{login}</h2>
      <a href={html_url} target='_blank' rel='noopener noreferrer'>
        {html_url}
      </a>
      <span>Score: {score}</span>
      <button
        onClick={(e) => {
          setModalLoader(true)
          abreModal(e)
          setUserIdAndLogin({ id, login })
        }}
        className='ver-mais-button'
      >
        Ver mais
      </button>
    </div>
  )
}

export default ResultsCard
