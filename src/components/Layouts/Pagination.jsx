/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Products from './Products'
import axios from 'axios'

function Items ({ currentItems }) {
  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
        <Products products={currentItems} />
      </div>
    </>
  )
}

const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0)
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image: '../../../src/assets/Bag_Gray.png'
    },
    {
      id: 2,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image: '../../../src/assets/Bag_Gray.png'
    },
    {
      id: 3,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image:
        'https://images.pexels.com/photos/103649/pexels-photo-103649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 4,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image:
        'https://images.pexels.com/photos/103649/pexels-photo-103649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 5,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image: '../../../src/assets/Bag_Gray.png'
    },
    {
      id: 6,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image: '../../../src/assets/Bag_Gray.png'
    },
    {
      id: 7,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image:
        'https://images.pexels.com/photos/103649/pexels-photo-103649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 8,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image:
        'https://images.pexels.com/photos/103649/pexels-photo-103649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 9,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image:
        'https://images.pexels.com/photos/103649/pexels-photo-103649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 10,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image:
        'https://images.pexels.com/photos/103649/pexels-photo-103649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 11,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image:
        'https://images.pexels.com/photos/103649/pexels-photo-103649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 12,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image:
        'https://images.pexels.com/photos/103649/pexels-photo-103649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 13,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image:
        'https://images.pexels.com/photos/103649/pexels-photo-103649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 14,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image:
        'https://images.pexels.com/photos/103649/pexels-photo-103649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 15,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image:
        'https://images.pexels.com/photos/103649/pexels-photo-103649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 16,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image:
        'https://images.pexels.com/photos/103649/pexels-photo-103649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 17,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image:
        'https://images.pexels.com/photos/103649/pexels-photo-103649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 18,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image:
        'https://images.pexels.com/photos/103649/pexels-photo-103649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 19,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image:
        'https://images.pexels.com/photos/103649/pexels-photo-103649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 20,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image:
        'https://images.pexels.com/photos/103649/pexels-photo-103649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 21,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image:
        'https://images.pexels.com/photos/103649/pexels-photo-103649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 22,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image:
        'https://images.pexels.com/photos/103649/pexels-photo-103649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 23,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image:
        'https://images.pexels.com/photos/103649/pexels-photo-103649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 24,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image:
        'https://images.pexels.com/photos/103649/pexels-photo-103649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 25,
      name: 'Formal Bag-Pack for Men - Gray',
      price: 44.0,
      image:
        'https://images.pexels.com/photos/103649/pexels-photo-103649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
  ])

  async function getAllproduct () {
    const data = await axios.get(
      'http://localhost:3005/api/v1/products/allproduct'
    )
    setItems(data.data)
  }

  useEffect(() => {
    getAllproduct()
  }, [])

  const endOffset = itemOffset + itemsPerPage
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`)

  const currentItems = items.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(items.length / itemsPerPage)

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // )

    setItemOffset(newOffset)
  }
  return (
    <div className='relative'>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel='...'
        nextLabel=''
        pageLinkClassName='inline-block border px-3 py-2'
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel=''
        containerClassName='flex gap-3'
        activeClassName='bg-primary text-white'
        renderOnZeroPageCount={null}
      />
      <p className='absolute right-0 bottom-1'>
        Products from {itemOffset + 1} to{' '}
        {endOffset > items.length ? items.length : endOffset} of {items.length}
      </p>
    </div>
  )
}

export default Pagination
