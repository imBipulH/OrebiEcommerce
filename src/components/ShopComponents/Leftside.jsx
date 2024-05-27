/* eslint-disable react/prop-types */
import ShopByTitle from './ShopByTitle'

// const categories = [
//   'Category 1',
//   'Category 2',
//   'Category 3',
//   'Category 4',
//   'Category 5'
// ]

var parentSports = [
  {
    parentSportName: 'Basketball',
    sports: [
      {
        sportName: "Men's Basketball",
        path: 'mbasket',
        sportID: 7
      },
      {
        sportName: "Women's BasketBall",
        path: 'wcc',
        sportID: 8
      }
    ]
  },
  {
    parentSportName: 'Cross Country',
    sports: [
      {
        sportName: "Women's Cross Country",
        path: 'wbasket',
        sportID: 9
      },
      {
        sportName: "Men's Cross Country",
        path: 'mcc',
        sportID: 10
      }
    ]
  }
]

let categories = []
let subCategories = []
parentSports.forEach(element => {
  categories.push(element.parentSportName)
  element.sports.forEach(element => {
    subCategories.push(element.sportName)
  })
})

const colors = ['Red', 'blue', 'Green', 'Purple', 'Pink', 'Orange']
const brands = ['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5']
const prizes = [
  '$0.00 - $9.99',
  '$10.00 - $19.99',
  '$20.00 - $29.99',
  '$30.00 - $39.99',
  '$40.00 - $49.99'
]

const Leftside = () => {
  return (
    <div>
      <ShopByTitle
        title='Shop By Category'
        items={categories}
        subItems={parentSports}
        dropdown={false}
      ></ShopByTitle>
     <ShopByTitle
        title='Shop By Color'
        items={colors}
        color={true}
        dropdown={true}
      />
      <ShopByTitle title='Shop By Brand' items={brands} dropdown={true} />
      <ShopByTitle title='Shop By Price' items={prizes} dropdown={false} />
    </div>
  )
}

export default Leftside
