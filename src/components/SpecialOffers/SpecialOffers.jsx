import { BsArrowRepeat } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'
import { IoCart } from 'react-icons/io5'

const newProducts = [
  {
    id: 1,
    name: 'Formal Bag-Pack for Men - Gray',
    price: 44.0,
    image:
      'https://images.pexels.com/photos/103649/pexels-photo-103649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: 2,
    name: 'Formal Bag-Pack for Men - Gray',
    price: 44.0,
    image:
      'https://images.pexels.com/photos/103649/pexels-photo-103649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: 3,
    name: 'Formal Bag-Pack for Men - Gray',
    price: 44.0,
    image:
      '../../../src/assets/Bag_Gray.png'
  },
  {
    id: 4,
    name: 'Formal Bag-Pack for Men - Gray',
    price: 44.0,
    image:
      'https://images.pexels.com/photos/103650/pexels-photo-103650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  }
]

const SpecialOffers = () => {
  return (
    <div className='container mb-10'>
      <h2 className='font-sans font-bold my-0 text-[40px]'>Special Offers</h2>
      <div className='grid grid-cols-4 gap-8'>
        {newProducts.map(item => {
          return (
            <div key={item.id} className='mb-8'>
              <div className='h-96 w-full  flex items-center'>
                <div className='relative h-80 group overflow-hidden'>
                  <img src={item.image} alt={item.name} className='relative ' />
                  <p className='px-3 py-1 bg-primary text-white font-sans text-xs absolute top-2 left-2 '>
                    30%
                  </p>
                  <div className='flex items-end justify-around flex-col bg-white absolute right-0 -bottom-36 duration-300 w-full h-[150px] group-hover:bottom-0 text-base py-4 pr-4'>
                    <div className='flex gap-2 items-center'>
                      <p>Add to Wish List</p>
                      <FaHeart size={16} />
                    </div>
                    <div className='flex items-center gap-2'>
                      <p>Compare</p>
                      <BsArrowRepeat
                        style={{ fontWeight: 'bold' }}
                        className='font-bold text-lg'
                      />
                    </div>
                    <div className='flex items-center gap-2'>
                      <p className='font-bold'>Add to Cart</p>{' '}
                      <IoCart size={18} />
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex justify-between'>
                <p className='font-bold'>{item.name}</p>
                <p className='text-secondary'>{`$${item.price}.00`}</p>
              </div>
              <p className='text-secondary'>Black</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SpecialOffers
