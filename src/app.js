'use strict'

import React, { Component } from 'react'
import Search from './components/Search'
import UserInfo from './components/User-info'
import Actions from './components/Actions'
import Repos from './components/Repos'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Search />
        <UserInfo />
        <Actions />

        <Repos
          className='repos'
          title='Repositórios'
          repos={[{
            name: 'Nome do repositório',
            link: '#'
          }]}
        />

        <Repos
          className='starred'
          title='Favoritos'
          repos={[{
            name: 'Nome do repositório',
            link: '#'
          }]}
        />
      </div>
    )
  }
}

export default App
