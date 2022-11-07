'use strict'

import React, { PropTypes } from 'react'
import Search from './Search'
import UserInfo from './User-info'
import Actions from './Actions'
import Repos from './Repos'

const AppContent = ({
  userinfo,
  repos,
  starred,
  handleSearch,
  getRepos,
  getStarred,
  isFetching
}) => (
  <div className='app'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.length && <Repos
      className='repos'
      title='Repositórios'
      repos={repos}
    />}

    {!!starred.length && <Repos
      className='starred'
      title='Favoritos'
      repos={starred}
    />}
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default AppContent
