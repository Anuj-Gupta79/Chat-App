import React from 'react'

export const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="Logo">Apne Log</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="file" />
                <button>Sign up</button>
            </form>
            <p>Already have an account? Login</p>
        </div>
    </div>
  )
}
