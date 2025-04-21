import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Brand</h1>
        <ul className="hidden md:flex space-x-8">
          <li><a href="#" className="hover:text-blue-500">Home</a></li>
          <li><a href="#" className="hover:text-blue-500">Products</a></li>
          <li><a href="#" className="hover:text-blue-500">Contact</a></li>
        </ul>
        <button className="md:hidden text-2xl">☰</button>
      </div>
    </nav>
  )
}

export default Navbar
