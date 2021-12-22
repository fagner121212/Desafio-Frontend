import React from 'react'
import './modal.css'
import { SearchContext } from '../../providers/search'
import Loading from '../loading/Loading'

function Modal() {
  const { userModalData, modalLoader } = React.useContext(SearchContext)

  const fechaModal = (e) => {
    e.preventDefault()
    const modal = document.querySelector('.modal')
    modal.style.display = 'none'
  }
  const addZeroToDate = (dateNumber) => {
    if (dateNumber <= 9) return '0' + dateNumber
    else return dateNumber
  }
  const returnFormatedCreatedInfo = (fullDate) => {
    const date = new Date(fullDate)
    return `${addZeroToDate(date.getDate())}/${addZeroToDate(
      date.getMonth() + 1
    )}/${date.getFullYear()}`
  }

  return (
    <div className='modal'>
      {modalLoader ? (
        <Loading toggle='on' />
      ) : (
        <div className='card-modal'>
          <div className='profile-piture'>
            <img src={userModalData.data.avatar_url} alt='profile' />
          </div>
          <div className='profile-name'>
            <h2>
              {userModalData.data.name
                ? userModalData.data.name
                : userModalData.data.login}
            </h2>
          </div>
          <hr />
          <div className='profile-details'>
            <div className='informations-container-left'>
              <h4 className='profile-info-title'>Username:</h4>
              <h4 className='profile-info'>{userModalData.data.login}</h4>

              <h4 className='profile-info-title'>Cadastrado(a):</h4>
              <h4 className='profile-info'>
                {returnFormatedCreatedInfo(userModalData.data.created_at)}
              </h4>

              <h4 className='profile-info-title'>URL:</h4>
              <h4 className='profile-info'>
                <a
                  href={userModalData.data.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {userModalData.data.html_url}
                </a>
              </h4>
            </div>

            <div className='informations-container-right'>
              <h4 className='profile-info-title'>Seguindo:</h4>
              <h4 className='profile-info'>{userModalData.data.following}</h4>

              <h4 className='profile-info-title'>Seguidores:</h4>
              <h4 className='profile-info'>{userModalData.data.followers}</h4>

              <button onClick={(e) => fechaModal(e)} className='button-fechar'>
                FECHAR
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal