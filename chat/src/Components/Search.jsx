import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user"/>
      </div>
      <div className="userChat">
        <img src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Image.png"></img>
        <span>Admin</span>
      </div>
    </div>
  )
}

export default Search