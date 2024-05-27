import Products from '../Layouts/Products'

const offerProducts = [
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
    image: '../../../src/assets/Bag_Gray.png'
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
        <Products products={offerProducts} />
      </div>
    </div>
  )
}

export default SpecialOffers
