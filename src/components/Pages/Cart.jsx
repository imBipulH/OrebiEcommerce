const Cart = () => {
  return (
    <div className='container'>
      <table className='bg-red-400 w-full'>
        <tr className='grid grid-cols-5 gap-4 bg-slate-400 w-full'>
          <th className="col-span-2 bg-sky-500">Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        <tr className='grid grid-cols-5 gap-4 w-full'>
          <td className="col-span-2 bg-sky-300">Product 1</td>
          <td className="bg-green-300 text-center">100</td>
          <td className="bg-green-300 text-center">1</td>
          <td className="bg-green-300 text-center">100</td>
        </tr>
      </table>
    </div>
  )
}

export default Cart
