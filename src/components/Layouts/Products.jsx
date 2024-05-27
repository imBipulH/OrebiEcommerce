import { BsArrowRepeat } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa6'
import { IoCart } from 'react-icons/io5'

// eslint-disable-next-line react/prop-types
const Products = ({ products }) => {
  return (
    <>
      {products &&
        // eslint-disable-next-line react/prop-types
        products.map(item => (
          <div key={item.id} className='mb-10 flex gap-x-2'>
            <div className='w-full'>
              <div className='h-96 w-full flex items-center overflow-clip'>
                <div className='relative h-80 w-full group overflow-hidden'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='relative object-cover h-80 w-full'
                  />
                  <p className='px-3 py-1 bg-primary text-white font-sans text-xs absolute top-2 left-2 '>
                    NEW
                  </p>

                  {/* Add to cart hover display */}

                  <div className='flex items-end justify-around flex-col bg-white absolute right-0 -bottom-[150px] duration-300 w-full h-[150px] group-hover:bottom-0 text-base py-4 pr-4'>
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
          </div>
        ))}
    </>
  )
}

export default Products
