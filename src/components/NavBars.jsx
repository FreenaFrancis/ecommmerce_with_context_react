import React from 'react'

function NavBars() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center w-full">
      <div className="flex items-center">
        {/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
        <span className="text-lg font-bold">My App</span>
      </div>
      <ul className="flex items-center space-x-4">
        <li>
          <a href="#" className="hover:text-gray-300">Home</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">About</a>
        </li>
        <li>
          <a href="/cart" className="hover:text-gray-300">Cart</a>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Log In
        </button>
      </div>
    </nav>
  )
}

export default NavBars