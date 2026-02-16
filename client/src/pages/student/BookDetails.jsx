import AppContext from 'antd/es/app/context'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../components/student/Loading'

const BookDetails = () => {

  const {id} = useParams()

  const [bookData, setBookData]= useState(null)

  const {allBooks} = useContext(AppContext)

  const fetchBookData = async()=>{
    const findBook =  allBooks.find(book=>book._id === id)
    setBookData(findBook);
  }

  useEffect(()=>{
    fetchBookData()
  },[])

  return bookData? (
    <>
    <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left '>
      
      <div className='absolute top-0 left-0 w-full h-screen -z-10 bg-gradient-to-b from-cyan-200 to-blue-400'></div>

      {/* left column */}

      <div>
        <h1>{bookData.bookTitle}</h1>
        <p>{bookData.bookDescription}</p>
      </div>

      {/* right column */}
      <div></div>
    </div>
    </>
  ): <Loading/>
}

export default BookDetails