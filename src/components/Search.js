'use strict'

import React, { PropTypes } from 'react'

const Search = ({ isDisabled, handleSearch }) => (
  <div className='search'>
    <input type='search'
      placeholder='Digite o nome do usuário no GitHub'
      onKeyUp={handleSearch}
      disabled={isDisabled}
    />
  </div>
)

Search.protoTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
