import React from 'react'
import { SearchContext } from '../../providers/search'
import Modal from '../modal/Modal'
import Loading from '../loading/Loading'
import ResultsCard from '../resultsCard/ResultsCard'
import './mainResults.css'

function MainResults() {
  const { search, userData, resultsLoader } = React.useContext(SearchContext)
  return (
    <div className='main'>
      <div className='results-title'>
        <p>
          {search
            ? `Resultados para: ${search}`
            : `Nenhum resultado encontrado`}
        </p>
      </div>

      <div className='results'>
        {resultsLoader ? (
          <Loading toggle='on' />
        ) : userData ? (
          userData.data.items.map((data) => {
            return (
              <ResultsCard
                key={data.id}
                id={data.id}
                avatar_url={data.avatar_url}
                login={data.login}
                html_url={data.html_url}
                score={Number(data.score).toFixed(2)}
              />
            )
          })
        ) : (
          ''
        )}
        <Modal />
      </div>
      <div className='background-image'></div>
    </div>
  )
}

export default MainResults