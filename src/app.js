'use strict'

import React, { Component } from 'react'
import AppContent from './components/AppContent'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
    }
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    if (keyCode === ENTER) {
      ajax().get(`https://api.github.com/users/${value}`)
      .then(result => {
        this.setState({
          userinfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          },
          repos: [],
          starred: []
        })
      })
    }
  }

  getRepos (typeRepo) {
    return () => {
      if (typeRepo === 'starred') {
        this.setState({
          repos: []
        })
      } else {
        this.setState({
          starred: []
        })
      }
      ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/${typeRepo}`)
      .then(result => {
        const repos = []
        result.forEach((repoInfos, index) => {
          repos[index] = {
            name: repoInfos.name,
            link: repoInfos.html_url,
            key: repoInfos.id
          }
        })
        this.setState({
          [typeRepo]: repos
        })
      })
    }
  }

  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={e => this.handleSearch(e)}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
    />
  }
}

export default App
