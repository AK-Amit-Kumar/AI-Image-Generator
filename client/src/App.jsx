import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo, logo1 } from './assets';

// Adding routes for two pages
// importing pages from index.js
import { Home, CreatePost } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between
       items-center bg-white sm:px-8 px-4 py-4 border-b 
       border-b-[#e6ebf4]">

        <Link to="/">
          <img src={logo1} alt="logo1" className="w-12 h-12 object-contain" />
        </Link>

        {/* <Link to="/create-post" className="font-inter font-medium 
        bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link> */}

        <Link to="/create-post">
          <button className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-full">
            Create
          </button>
        </Link>

      </header>
    </BrowserRouter>
  )
}

export default App