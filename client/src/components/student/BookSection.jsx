import React, { useState, useEffect } from 'react'
import { Button, Typography } from 'antd'
import { Link } from 'react-router-dom'
import BookCard from './BookCard'
import { dummyBooks } from '../../assets/assets'

const { Title, Paragraph } = Typography

const BookSection = () => {
  const currency = import.meta.env.VITE_CURRENCY
  const [allBooks, setAllBooks] = useState([])

  // Fetch all books
  const fetchAllBooks = async () => {
    setAllBooks(dummyBooks)
  }

  useEffect(() => {
    fetchAllBooks()
  }, [])

  return (
    <div className='py-16 md:px-40 px-8'>
        <Title level={2} className='text-3xl font-medium text-gray-800' style={{ margin: 0 }}>
          Learn from the best
        </Title>
        <Paragraph className='text-sm md:text-base text-gray-500 mt-3' style={{ marginBottom: 0 }}>
          Discover our top rated books across various categories. From coding and design to business and wellness, our books are put to deliver the results.
        </Paragraph>

        <div 
          className='px-4 md:px-0 md:my-16 my-10 gap-4'
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
          }}
        >
          {allBooks.slice(0,4).map((book, index) => (
            <BookCard key={index} book={book} currency={currency} />
          ))}
        </div>

        <Link to={'/books-list'} onClick={()=>scrollTo(0,0)}>
          <Button className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'>
            Show all books
          </Button>
        </Link>
    
    </div>
  )
}

export default BookSection

