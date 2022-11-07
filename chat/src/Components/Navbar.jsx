import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="Logo">Apne Log</span>
      <div className="user">
        <img src="https://media.istockphoto.com/id/1323990939/photo/a-studio-portrait-of-a-young-millennial-woman.jpg?s=612x612&w=is&k=20&c=b__5eh7TjXc7ayUmIlIOOhfnbOuWyaXpovibRTfKz2M="></img>
        <span>User</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar