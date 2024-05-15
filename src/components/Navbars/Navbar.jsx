import logo from '../../../src/assets/OREBI©.png'
import Flex from '../Layouts/Flex'

const Navbar = () => {
  return (
    <div className='container'>
      <nav>
        <Flex className='align-center justify-between bg-slate-000 py-8'>
          <img src={logo} alt='logo' />
          <ul className='flex gap-10 font-sans cursor-pointer font-bold text-secondary text-lg'>
            <li className='hover:text-primary text-primary'>Home</li>
            <li className='hover:text-primary'>Shop</li>
            <li className='hover:text-primary'>About</li>
            <li className='hover:text-primary'> Contacts</li>
            <li className='hover:text-primary'>Journal</li>
          </ul>
        </Flex>
      </nav>
    </div>
  )
}

export default Navbar
