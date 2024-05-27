/* eslint-disable react/prop-types */
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { useState } from 'react'
import ShopByCategory from './ShopByCategory'

const ShopByTitle = ({ title, items, subItems, color, dropdown }) => {
  const [showOptions, setShowOptions] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const handleClick = () => {
    setShowOptions(!showOptions)
    setSelectedCategory(showOptions ? null : items[0]) // Set first item as selected initially
  }

  console.log(subItems)

  return (
    <div className='mb-8'>
      {/* This is Shop By Title Here */}

      <div onClick={handleClick} className='flex justify-between items-center'>
        <h1 className='text-xl font-bold text-sans'>{title}</h1>
        {dropdown &&
          (showOptions ? (
            <TiArrowSortedUp size={25} />
          ) : (
            <TiArrowSortedDown size={25} />
          ))}
      </div>

      {/* This is Shop By Options Here */}

      {dropdown == true ? (
        showOptions && (
          <>
            <ShopByCategory
              subOptions={true}
              items={items}
              color={color}
              selectedCategory={selectedCategory}
              subItemss={subItems}
            />

            {/* <ShopByOptions subOptions={true} items={items} color={color}>
              {subItems &&
                subItems.map((subitem, index) => <p key={index}>{subitem}</p>)}
            </ShopByOptions> */}
          </>
        )
      ) : (
        <>
          <ShopByCategory
            subOptions={true}
            items={items}
            color={color}
            subItemss={subItems}
          >
            {/* {subItems &&
              subItems.map(
                (subitem, index) => console.log(subitem)
                // <p key={index}>{subitem}</p>
              )} */}
          </ShopByCategory>
        </>
      )}
    </div>
  )
}

export default ShopByTitle
