import React from 'react'
import Hero from '../../components/student/Hero'
import BookSection from '../../components/student/BookSection'
import BookCard from '../../components/student/BookCard'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
        <Hero/>
        <BookSection/>
  
    </div>
  )
}

export default Home