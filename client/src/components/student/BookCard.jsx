import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const BookCard = ({book, currency}) => {

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

  return (
    <Link to={'/book/'+book._id} onClick={()=>scrollTo(0,0)} className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg '>
        <img className='w-full' src={book.bookThumbnail} alt="" />

        <div className='p-3 text-left'>
          <h3 className='text-base font-semibold'>{book.bookTitle}</h3>
          <p className='text-gray-500'>{book.librarian.name}</p>
          <div className='flex items-center space-x-2'>
            <p>{calculateRating(book)}</p>
            <div className='flex'>         {/*  rating */}
              {[...Array(5)].map((_,i)=>(<img key={i} src={i< Math.floor(calculateRating(book))? assets.star : assets.star_blank} alt='' className='w-3.5 h-3.5'/>))}
            </div>

            <p className='text-gray-500'>{book.bookRatings.length}</p>
          </div>
          <p className='text-base font-semibold text-gray-800'>{currency}{(book.bookPrice - book.discount * book.bookPrice /100).toFixed(2)}</p>  {/*  discount */}
        </div>
    </Link>
  )
}

export default BookCard