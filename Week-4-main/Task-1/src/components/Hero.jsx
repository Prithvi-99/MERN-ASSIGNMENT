import React from 'react'

const Hero = () => {
  return (
    <section className="bg-blue-500 text-white py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg mb-6">Discover amazing products at unbeatable prices!</p>
        <a href="#products" className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold">
          Shop Now
        </a>
      </div>
    </section>
  )
}

export default Hero
