import { BsArrowCounterclockwise } from 'react-icons/bs'
import { MdLocalShipping } from 'react-icons/md'

const AdditonalInfo = () => {
  return (
    <div className='container flex justify-between py-4'>
      <p className='flex items-center gap-2'>
        <span className='text-xl font-bold'>2</span>{' '}
        <span className='text-gray-400'>Two years warranty</span>
      </p>
      <p className='flex gap-2 items-center'>
        <span>
          <MdLocalShipping size={20} />
        </span>{' '}
        <span className='text-gray-400'>Free shiping</span>
      </p>
      <p className=' flex gap-2 items-center'>
        <span>
          {' '}
          <BsArrowCounterclockwise size={20} />
        </span>{' '}
        <span className='text-gray-400'>Return policy in 30 days</span>
      </p>
    </div>
  )
}

export default AdditonalInfo
