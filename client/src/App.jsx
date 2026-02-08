import React from 'react'
import { Routes, Route, BrowserRouter, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import BooksList from './pages/student/BooksList'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import BookDetails from './pages/student/BookDetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Librarian from './pages/librarian/Librarian'
import Dashboard from './pages/librarian/Dashboard'
import AddBook from './pages/librarian/AddBook'
import MyBooks from './pages/librarian/MyBooks'
import StudentsEnrolled from './pages/librarian/StudentsEnrolled'
import Navbar from './components/student/Navbar'
import Hero from './components/student/Hero'
import BookSection from './components/student/BookSection'

const App = () => {

  const isLibrarianRoute = useMatch('/librarian/*')

  return (
    <div className='text-default min-h-screen bg-white'>
      {!isLibrarianRoute && <Navbar />}
      
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/books-list' element={<BooksList />}/>
        <Route path='/books-list/:id' element={<BooksList />}/>
        <Route path='/book/:id' element={<BookDetails />}/>
        <Route path='/my-enrollments' element={<MyEnrollments />}/>
        <Route path='/player/:bookId' element={<Player />}/>
        <Route path='/loading/:path' element={<Loading />}/>
        
        
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>

        <Route path='/librarian' element={<Librarian/>}>
              <Route path='librarian' element={<Dashboard/>}/>
              <Route path='add-book' element={<AddBook/>}/>
              <Route path='my-books' element={<MyBooks/>}/>
              <Route path='student-enrolled' element={<StudentsEnrolled/>}/>
        </Route>
      </Routes>
    </div>
    
  )
}

export default App



//1:02