import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { dummyBooks, dummyLibrarianData } from '../../assets/assets'
import { Typography, Button } from 'antd'
import {Line} from "rc-progress"
import Footer from '../../components/student/Footer' 

const { Title } = Typography

const MyEnrollments = () => {

  const navigate = useNavigate()
  const [enrolledBooks, setEnrolledBooks] = useState([])

  const fetchUserEnrolledBooks = async () => {
    const booksWithLibrarian = dummyBooks.map(book => ({
      ...book,
      librarian: dummyLibrarianData
    }))
    setEnrolledBooks(booksWithLibrarian)
  }

  useEffect(() => {
    fetchUserEnrolledBooks()
  }, [])

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

  const [progressArray, setProgressArray]= useState([
    {chapterCompleted: 2, totalChapters: 4},
    {chapterCompleted: 1, totalChapters: 5},
    {chapterCompleted: 3, totalChapters: 6},
    {chapterCompleted: 4, totalChapters: 4},
    {chapterCompleted: 0, totalChapters: 3},
    {chapterCompleted: 5, totalChapters: 7},
    {chapterCompleted: 6, totalChapters: 8},
    {chapterCompleted: 2, totalChapters: 6},
    {chapterCompleted: 4, totalChapters: 10},
    {chapterCompleted: 3, totalChapters: 5},
    {chapterCompleted: 7, totalChapters: 7},
    {chapterCompleted: 1, totalChapters: 4},
    {chapterCompleted: 0, totalChapters: 2},
    {chapterCompleted: 5, totalChapters: 5},
  ])

  return (
    <>
    <div className='md:px-36 px-8 pt-10'>
      <Title level={1} className='text-2xl font-semibold' style={{ margin: 0 }}>My Enrollments</Title>
      
      <table className='md:table-auto table-fixed w-full overflow-hidden border mt-10'>
        <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden'>
          <tr>
            <th className='px-4 py-3 font-semibold truncate'>Book</th>
            <th className='px-4 py-3 font-semibold truncate'>Duration</th>
            <th className='px-4 py-3 font-semibold truncate'>Completed</th>
            <th className='px-4 py-3 font-semibold truncate'>Status</th>
          </tr>
        </thead>

        <tbody className='text-gray-700'>
          {enrolledBooks.map((book, index)=>(
            <tr key={index} className='border-b border-gray-500/20'>
              <td className='md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3'>
                <img src={book.bookThumbnail} alt="" className='w-14 sm:w-24 md:w-28' />
                <div className='flex-1'><p className='mb-1 max-sm:text-sm'>{book.bookTitle}</p>
                <Line strokeWidth={2} percent={progressArray[index] ? (progressArray[index].chapterCompleted * 100)/ progressArray[index].totalChapters: 0} className='bg-gray-300 rounded-full '/>
                </div>
              </td>
              <td className='px-4 py-3 max-sm:hidden'>
                {calculateBookDuration(book)}
              </td>

              <td className='px-4 py-3 max-sm:hidden'>
                {progressArray[index] && `${progressArray[index].chapterCompleted} / ${progressArray[index].totalChapters}`} <span>Chapters</span>
              </td>

              <td className='px-4 py-3 max-sm:text-right'>
                <Button className='px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-600 max-sm:text-xs text-white' onClick={()=>navigate('/book/' + book._id)}>
                  {progressArray[index] && progressArray[index].chapterCompleted / progressArray[index].totalChapters === 1 ? 'Completed': 'On Going'}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer />
    </>
    
    
  )
}

export default MyEnrollments