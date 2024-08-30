import React from 'react'
import './Home.css'
import NavBar from '../Nav/Nav'
import Category from '../Category/Category'

const Home = () => {
  return (
    <div className='main h-100 w-100'>
        <NavBar/>
        <Category/>
    </div>
  )
}

export default Home