import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Menus = ['Home', 'Shop', 'About', 'Contact', 'Journal']
const Shops = [
  'Category 1',
  'Category 2',
  'Category 3',
  'Category 4',
  'Category 5'
]
const Helps = [
  'Privacy Policy',
  'Terms & Conditions',
  'Special E-shopo',
  'Shipping',
  'Secure Payments'
]

const Footer = () => {
  return (
    <div className='bg-[#F3F3F3] '>
      <div className='container py-4 flex gap-8'>
        <div className='w-2/4 flex justify-between mr-20'>
          <div className='flex flex-col justify-between'>
            <h4 className='my-3 font-bold'>MENU</h4>
            <ul className='text-sm '>
              {Menus.map(menu => (
                <li key={menu} className='leading-7 cursor-pointer'>
                  {menu}
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col  justify-between'>
            <h4 className='my-3 font-bold'>SHOP</h4>
            <ul className=''>
              {Shops.map(menu => (
                <li key={menu} className='leading-7 cursor-pointer'>
                  {menu}
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col  justify-between'>
            <h4 className='my-3 font-bold'>HELP</h4>
            <ul className=''>
              {Helps.map(menu => (
                <li key={menu} className='leading-7 cursor-pointer'>
                  {menu}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex justify-between w-2/4'>
          <div className='my-3'>
            <p className='font-bold'>(052) 611-5711</p>
            <p className='font-bold my-1'>bipulh62@gmail.com</p>
            <p className='text-secondary my-3'>
              Banani 1213. Road#12. House#38
            </p>
          </div>
          <div className='my-3 flex flex-col justify-between'>
            <img
              className='h-8 w-[122px]'
              src='../../../src/assets/OREBI©2.png'
              alt='logo'
            />
          </div>
        </div>
      </div>
      <div className='container flex items-center justify-between py-10'>
        <div className='flex gap-3'>
          <FaFacebookF />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
        <p className='font-bold my-3 text-secondary'>
          © 2021 Orebi. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
