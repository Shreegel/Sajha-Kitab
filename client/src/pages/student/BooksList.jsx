import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Typography, Tag } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import SearchBar from '../../components/student/SearchBar'
import BookCard from '../../components/student/BookCard'
import { assets, dummyBooks, dummyLibrarianData } from '../../assets/assets'
import Footer from '../../components/student/Footer'

const { Title, Text } = Typography

const BooksList = () => {

  const navigate = useNavigate()
  const currency = import.meta.env.VITE_CURRENCY
  const [allBooks, setAllBooks] = useState([])
  const {input} = useParams()
  const [filteredBook, setFilteredBook]= useState([])

  // Fetch all books and populate librarian data
  const fetchAllBooks = async () => {
    const booksWithLibrarian = dummyBooks.map(book => ({
      ...book,
      librarian: dummyLibrarianData
    }))
    setAllBooks(booksWithLibrarian)
  }

  useEffect(() => {
    fetchAllBooks()
  }, [])

  useEffect(()=>{
    if(allBooks && allBooks.length > 0){
      const tempBooks = allBooks.slice()

      input? setFilteredBook(
        tempBooks.filter(
          item => item.bookTitle.toLowerCase().includes(input.toLowerCase())
        )
      )
      :setFilteredBook(tempBooks)
    }

  },[allBooks, input])

  return (
    <>
      <div className='relative md:px-36 px-8 pt-20 text-left'>
        <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
          <div>
            <Title level={1} className='text-4xl font-semibold text-gray-800' style={{ margin: 0 }}>
              Book List
            </Title>
            <Text className='text-gray-500'>
              <span className='text-blue-600 cursor-pointer' onClick={()=>navigate('/')}>Home</span> / <span>Book List</span>
            </Text>
          </div>

         <SearchBar data={input}/>
        </div>
        {
          input && (
            <Tag 
              closable 
              onClose={()=>navigate('/book-list')}
              closeIcon={<CloseOutlined />}
              className='inline-flex items-center gap-4 px-4 py-2 border mt-8 mb-8 text-gray-600'
              style={{ fontSize: '14px', padding: '8px 16px' }}
            >
              {input}
            </Tag>
          )
        }

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
          {filteredBook.map((book,index)=><BookCard key={index} book={book} currency={currency} />)}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default BooksList