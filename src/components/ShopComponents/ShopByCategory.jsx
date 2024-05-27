/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'

const ShopByCategory = ({ subOptions, items, color, subItemss }) => {
  const [openSubCategories, setOpenSubCategories] = useState([])

  const toggleSubCategory = index => {
    if (openSubCategories.includes(index)) {
      setOpenSubCategories(openSubCategories.filter(i => i !== index))
    } else {
      setOpenSubCategories([...openSubCategories, index])
    }
  }

  return (
    <div>
      {items &&
        items.map((item, index) => (
          <>
            {!subItemss && (
              <p
                key={index}
                className='flex items-center justify-between py-4 border-b border-gray-200 cursor-pointer'
              >
                {color ? (
                  <div className='flex items-center gap-2'>
                    <p
                      style={{ background: item }}
                      className={`w-2 h-2 rounded-full`}
                    ></p>
                    <p className={`text-base`}>{item}</p>
                  </div>
                ) : (
                  <p className='text-base'>{item}</p>
                )}
              </p>
            )}
          </>
        ))}

      {subOptions && subItemss && (
        <div>
          {subItemss.map((subItem, index) => (
            <>
              <div
                className='flex items-center justify-between pr-2 py-4 border-b border-gray-200 cursor-pointer'
                onClick={() => toggleSubCategory(index)}
              >
                <p key={index}>{subItem.parentSportName}</p>
                {openSubCategories.includes(index) ? (
                  <FaMinus size={10} />
                ) : (
                  <FaPlus size={10} />
                )}
              </div>

              {openSubCategories.includes(index) && (
                <div>
                  {subItem.sports.map((item, indexx) => (
                    <p
                      className=' pl-4 py-4 border-b border-gray-200 text-sm'
                      key={indexx}
                    >
                      {item.sportName}
                    </p>
                  ))}
                </div>
              )}
            </>
          ))}
        </div>
      )}
      {/* <ul>{subCategoryShow && <li>{children}</li>}</ul> */}
    </div>
  )
}

export default ShopByCategory
