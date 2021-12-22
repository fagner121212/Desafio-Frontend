import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const SearchContext = React.createContext({})

export const SearchProvider = (props) => {
  const [search, setSearch] = useState()
  const [userData, setUserData] = useState()
  const [userModalData, setUserModalData] = useState({
    data: {
      login: 'Não encontrado',
      name: null,
      created_at: Date.now(),
      html_url: 'Não encontrado',
      folowers: 0,
      following: 0,
      avatar_url: 'Não encontrado',
    },
  })
  const [userIdAndLogin, setUserIdAndLogin] = useState()
  const [modalLoader, setModalLoader] = useState(true)
  const [resultsLoader, setResultsLoader] = useState(true)

  useEffect(() => {
    const fetchModalResult = async () => {
      try {
        if (userIdAndLogin) {
          const resultsModal = await axios.get(
            `https://api.github.com/users/${userIdAndLogin.login}`
          )
          setUserModalData(resultsModal)
          setModalLoader(false)
        }
      } catch (error) {}
    }
    if (userIdAndLogin) {
      fetchModalResult(userIdAndLogin.login)
    }
  }, [userIdAndLogin])

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const results = await axios.get(
          `https://api.github.com/search/users?q=${search}`
        )
        setUserData(results)
        setResultsLoader(false)
      } catch (error) {}
    }
    if (search) {
      fetchResult()
    }
  }, [search])

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        userData,
        setUserData,
        userModalData,
        setUserModalData,
        setUserIdAndLogin,
        userIdAndLogin,
        modalLoader,
        setModalLoader,
        setResultsLoader,
        resultsLoader,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}