import { useState } from 'react'
import Breadcumb from '../Layouts/Breadcumb'
import Pagination from '../Layouts/Pagination'
import Leftside from '../ShopComponents/Leftside'

const Shop = () => {
  const [featured, setFeatured] = useState()
  const [itemPerPage, setItemPerPage] = useState(9)

  const handleItemPerPage = e => {
    setFeatured(e.target.value)
    console.log(featured)
  }
  const handleShowPerPage = e => {
    setItemPerPage(Number(e.target.value))
    console.log(typeof itemPerPage)
  }
  return (
    <div className='container py-20'>
      <Breadcumb />
      <div className='flex mt-20 gap-4'>
        <div className=' w-1/4'>
          <Leftside />
        </div>
        <div className='bg-white w-3/4'>
          <div className='flex gap-8 justify-end'>
            <form className=' flex items-center gap-2 justify-end'>
              <label htmlFor='countries' className='text-base '>
                Sort by:
              </label>
              <select
                onChange={e => handleItemPerPage(e)}
                id='countries'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-base min-w-[236px] px-2 py-1 outline-none '
              >
                <option>Featured</option>
                <option value='US'>United States</option>
                <option value='CA'>Canada</option>
                <option value='FR'>France</option>
                <option value='DE'>Germany</option>
              </select>
            </form>
            <form className=' flex items-center gap-2 justify-end '>
              <label htmlFor='countries' className='text-base '>
                Show:
              </label>
              <select
                onChange={e => handleShowPerPage(e)}
                id='countries'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-base min-w-[120px] px-2 py-1 outline-none  '
              >
                <option value='6'>6</option>
                <option value='9'>9</option>
                <option value='12'>12</option>
                <option value='24'>24</option>
                <option value='36'>36</option>
                <option value='48'>48</option>
              </select>
            </form>
          </div>

          <Pagination itemsPerPage={itemPerPage} />
        </div>
      </div>
    </div>
  )
}

export default Shop
