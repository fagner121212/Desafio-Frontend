import React from 'react'
import './loading.css'
function Loading({ toggle }) {
  if (toggle === 'on') {
    return (
      <div className='loading-container'>
        <div className='loading'>Loading...</div>
      </div>
    )
  } else {
    return <div> </div>
  }
}

export default Loading
