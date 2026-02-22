import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../components/student/Loading'
import { assets, dummyBooks, dummyLibrarianData } from '../../assets/assets'

const BookDetails = () => {

  const {id} = useParams()
  const [bookData, setBookData] = useState(null)
  const currency = import.meta.env.VITE_CURRENCY

  //function to calculate average rating of the book
  const calculateRating = (book) => {
    if(book.bookRatings.length === 0){
      return 0
    }
    let totalRating = 0
    book.bookRatings.forEach(rating => {
      totalRating += rating.rating
    })
    return totalRating / book.bookRatings.length
  }

  //function to calculate total number of lectures
  const calculateNoOfLectures = (book) => {
    let totalLectures = 0
    book.bookContent.forEach(chapter => {
      totalLectures += chapter.chapterContent.length
    })
    return totalLectures
  }

  //function to calculate total book duration in hours
  const calculateBookDuration = (book) => {
    let totalDuration = 0
    book.bookContent.forEach(chapter => {
      chapter.chapterContent.forEach(lecture => {
        totalDuration += lecture.lectureDuration
      })
    })
    const hours = Math.floor(totalDuration / 60)
    const minutes = totalDuration % 60
    return `${hours}h ${minutes}m`
  }

  const fetchBookData = async () => {
    const findBook = dummyBooks.find(book => book._id === id)
    if(findBook){
      setBookData({
        ...findBook,
        librarian: dummyLibrarianData
      })
    }
  }

  useEffect(()=>{
    fetchBookData()
  },[id])

  return bookData ? (
    <>
    <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left '>
      
      <div className='absolute top-0 left-0 w-full h-screen -z-10 bg-gradient-to-b from-cyan-200 to-blue-400'></div>

      {/* left column */}
      <div className='max-w-xl z-10 text-gray-500'>
       <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', lineHeight: '44px', fontWeight: '600' }} className='text-gray-800'>{bookData.bookTitle}</h1>
        <p className='pt-4 md:text-base text-sm' dangerouslySetInnerHTML={{__html: bookData.bookDescription.slice(0,200)}}></p>



        {/* review and rating */}
        <div className='flex items-center space-x-2 pt-3 pb-1 text-sm'>
          <p>{calculateRating(bookData)}</p>
            <div className='flex'>
                {[...Array(5)].map((_,i)=>(<img key={i} src={i < Math.floor(calculateRating(bookData)) ? assets.star : assets.star_blank} alt='' className='w-3.5 h-3.5'/>))}
            </div>
            <p className='text-blue-600'>({bookData.bookRatings.length} {bookData.bookRatings.length >1 ? 'ratings': 'rating'})</p> 

            <p>{bookData.enrolledStudents.length} {bookData.enrolledStudents.length > 1 ? 'students': 'student'}</p>
        </div>

      <p className='text-sm'>Book by<span className='text-blue-600 underline'> Author</span></p>
      
      <div className='py-20 text-sm md:text-default'>
        <h3 className='text-xl font-semibold text-gray-800'>Book Description</h3>
        <p className='pt-3 rich-text' dangerouslySetInnerHTML={{__html: bookData.bookDescription}}></p>
      </div>


      </div>

      {/* right column */}
      <div style={{ maxWidth: '424px', boxShadow: '0px 4px 15px 2px rgba(0,0,0,0.1)' }} className='z-10 rounded-t md:rounded-none overflow-hidden bg-white min-w-[300px] sm:min-w-[420px]'>
        <img src={bookData.bookThumbnail} alt="" />
        <div className='p-5'>
            <div className='flex items-center gap-2'>
              <img className='w-3.5' src={assets.time_left_clock_icon} alt="time left clock icon" />
              <p className='text-red-500'><span className='font-medium'>5 days</span> left at this price!</p>
            </div>

            <div className='flex gap-3 items-center pt-2'>
                <p className='text-gray-800 md:text-4xl text-2xl font-semibold'>{currency}{(bookData.bookPrice - bookData.discount * bookData.bookPrice / 100).toFixed(2)}</p>
                <p className='md:text-lg text-gray-500 line-through'>{currency}{bookData.bookPrice}</p>
                <p className='md:text-lg text-gray-500'>{bookData.discount}% off</p>
            </div>

            <div className='flex items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500'>
              <div className='flex items-center gap-1'>
                <img src={assets.star} alt="star icon" />
                <p>{calculateRating(bookData)}</p>
              </div>

              <div className='h-4 w-px bg-gray-500/40'></div>

              <div className='flex items-center gap-1'>
                <img src={assets.time_clock_icon} alt="clock icon" />
                <p>{calculateBookDuration(bookData)}</p>
              </div>


              <div className='h-4 w-px bg-gray-500/40'></div>

              <div className='flex items-center gap-1'>
                <img src={assets.lesson_icon} alt="clock icon" />
                <p>{calculateNoOfLectures(bookData)} lessons</p>
              </div>

            </div>
        </div>
      </div>
    </div>
    </>
  ) : <Loading/>
}

export default BookDetails