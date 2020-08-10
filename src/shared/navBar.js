import React from 'react'

export default function NavBar() {
  return (
    <header className="text-gray-700 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        </nav>
        <button className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <span className="ml-3 text-xl">Forum App</span>
        </button>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        </div>
      </div>
    </header>
  )
}
