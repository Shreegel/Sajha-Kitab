import React from 'react'
import { Button } from 'antd'
import { assets } from '../../assets/assets'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()
    const isBookListPage = location.pathname.includes('/book-list')

    return (
        <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4  ${isBookListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
            <img src={assets.SajhaKitabLogo} alt="Logo" className='w-28 lg:w-32 cursor-pointer' />

            <div className='hidden md:flex items-center gap-5 text-gray-500'>
                <div className='flex items-center gap-5'>
                    <Button type="text" className='text-gray-500 p-0 h-auto'>
                        Become Librarian
                    </Button>
                    | <Link to='/my-enrollments'>My Enrollments</Link>
                </div>
                <Button 
                    type="primary" 
                    className='bg-blue-600 text-white px-5 py-2 rounded-full'
                    style={{ borderRadius: '9999px' }}
                >
                    Create Account
                </Button>
            </div>

            {/* for smaller screens */}
            <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
                <div>
                    <Button type="text" className='text-gray-500 p-0 h-auto'>
                        Become Librarian
                    </Button>
                    | <Link to='/my-enrollments'>My Enrollments</Link>
                </div>
                <Button type="text" className='p-0 h-auto'>
                    <img src={assets.user_icon} alt="" />
                </Button>
            </div>
        </div>
    )
}

export default Navbar

//1:15