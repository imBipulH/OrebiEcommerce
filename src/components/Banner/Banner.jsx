import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import banner from '../../assets/Banner.png'
import { useState } from 'react'

const Banner = () => {
  const [activeDot, setActiveDot] = useState(0)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    beforeChange: (prev, next) => {
      setActiveDot(next)
    },
    appendDots: dots => (
      <div
        style={{
          margin: 'auto',
          height: '100%',
          width: 'fit-content',
          left: '190px',
          top: '-150px',
          position: 'absolute'
        }}
      >
        <ul
          style={{
            height: '100%',
            width: '50px',
            margin: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <li
            style={{
              fontFamily: 'dm sans',
              fontSize: '14px'
            }}
          >
            {dots}
          </li>
        </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={
          i === activeDot
            ? {
                width: '30px',
                color: '#262626',
                borderRight: '3px #262626 solid',
                textAlign: 'center',
                fontSize: '14px',
                fontWeight: 'bold',
                lineHeight: '35px'
              }
            : {
                width: '30px',
                color: 'transparent',
                borderRight: '3px white solid',
                textAlign: 'center',
                fontSize: '14px',
                fontWeight: 'bold',
                lineHeight: '35px'
              }
        }
      >
        {i + 1}
      </div>
    )
  }
  return (
    <div className='z-10'>
      <Slider {...settings} className='relative'>
        <div>
          <img className='h-full w-full' src={banner} alt='banner1' />
        </div>
        <div>
          <img className='h-full w-full' src={banner} alt='banner1' />
        </div>
        <div>
          <img className='h-full w-full' src={banner} alt='banner1' />
        </div>
      </Slider>
    </div>
  )
}

export default Banner
