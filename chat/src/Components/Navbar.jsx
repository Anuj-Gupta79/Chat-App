import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="Logo">Apne Log</span>
      <div className="user">
        <img src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Image.png"></img>
        <span>Admin</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar