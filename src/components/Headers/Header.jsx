import { FaCaretDown, FaSearch } from 'react-icons/fa'
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2'
import { IoCart, IoPerson } from 'react-icons/io5'
import Dropdown from '../Layouts/Dropdown'
import { useEffect, useRef, useState } from 'react'
import { ImCross } from 'react-icons/im'

const Header = () => {
  const personRef = useRef()
  const categoryRef = useRef()
  const cartRef = useRef()
  const [show, setShow] = useState(false)
  const [userShow, setUserShow] = useState(false)
  const [cartShow, setCartShow] = useState(false)

  const categories = [
    'Accesories',
    'Furniture',
    'Electronics',
    'Clothes',
    'Bags',
    'Home appliances'
  ]

  useEffect(() => {
    document.body.addEventListener('click', e => {
      if (categoryRef.current && !categoryRef.current.contains(e.target)) {
        setShow(false)
      }
      if (personRef.current && !personRef.current.contains(e.target)) {
        setUserShow(false)
      }
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setCartShow(false)
      }
    })
  }, [])

  const handleClick = () => {
    setShow(!show)
  }
  const handleUserShow = () => {
    setUserShow(!userShow)
  }

  return (
    <div className=' bg-[#f5f5f3] py-4'>
      <div className='container flex justify-between items-center '>
        <Dropdown onClick={handleClick} dropRef={categoryRef}>
          <div className='flex cursor-pointer items-center gap-2.5 text-primary text-sm'>
            <HiOutlineBars3BottomLeft className='text-lg' />
            <p className='font-sans text-nowrap text-base'>Shop by Category</p>
          </div>
          {show && (
            <div className='bg-primary absolute w-60 mt-5 z-20 '>
              <ul className=' flex flex-col  text-[#BDBDBD] text-sm '>
                {categories.map(category => (
                  <li
                    key={category}
                    className='font-sans hover:text-white p-4 border-b border-b-[#bdbdbd31] box-content hover:pl-6 duration-200'
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Dropdown>

        <div className=' flex max-w-[600px] w-1/2 relative'>
          <input
            type='text'
            placeholder='Search Products'
            className='text-base px-5 py-4 font-sans bg-white w-full outline-none rounded-sm relative'
          />
          <FaSearch className='absolute cursor-pointer right-5 top-1/2 -translate-y-1/2' />
        </div>

        <div className=' flex gap-3 justify-end text-lg'>
          <Dropdown
            className='relative'
            onClick={handleUserShow}
            dropRef={personRef}
          >
            <div className='flex cursor-pointer '>
              <IoPerson />
              <FaCaretDown />
            </div>

            {userShow && (
              <ul className='absolute text-center bg-white text-sm text-black shadow-md right-0 flex flex-col w-48 top-10 z-20'>
                <li className=' hover:bg-primary py-4 border-b hover:text-white duration-200'>
                  My Account
                </li>
                <li className=' hover:bg-primary py-4 hover:text-white duration-200'>
                  Log Out
                </li>
              </ul>
            )}
          </Dropdown>
          <Dropdown
            className='relative'
            onClick={() => setCartShow(!cartShow)}
            dropRef={cartRef}
          >
            <IoCart className='cursor-pointer' />
            {cartShow && (
              <div className='absolute right-0 shadow-md w-[360px] top-10 z-20'>
                <div className='flex justify-between p-4 items-center bg-gray-200'>
                  <div className='flex gap-4'>
                    <div className='bg-gray-300 w-20 h-20 flex items-center justify-center'>
                      Image
                    </div>
                    <div className='flex flex-col justify-center font-bold text-sm'>
                      <h5>Black Smart Watch</h5>
                      <p>$44.00</p>
                    </div>
                  </div>
                  <div>
                    <ImCross className='text-primary' size={10} />
                  </div>
                </div>
                <div className='p-4 bg-white'>
                  <p className='mb-3'>
                    Subtotal: <span className='font-bold'>$44.00</span>
                  </p>
                  <div className='flex justify-between'>
                    <button className='py-3 border border-primary hover:bg-primary hover:text-white duration-200 w-[150px] text-sm  font-bold'>
                      View Cart
                    </button>
                    <button className='py-3 border border-primary hover:bg-primary hover:text-white duration-200 w-[150px] text-sm  font-bold'>
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default Header
