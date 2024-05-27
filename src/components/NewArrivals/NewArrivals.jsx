import Products from '../Layouts/Products'

const newProducts = [
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
  }
]

const NewArrivals = () => {
  return (
    <div className='container'>
      <h2 className='font-sans font-bold my-0 text-[40px]'>New Arrivals</h2>
      <div className='grid grid-cols-4 gap-8'>
        <Products products={newProducts} />
      </div>
    </div>
  )
}

export default NewArrivals
