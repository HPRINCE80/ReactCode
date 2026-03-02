
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-4'>
        <Link className='text-xl font-semibold' to='/product/men'>Mens Page</Link>
        <Link className='text-xl font-semibold' to='/product/women'>Women Page</Link>
        <Link className='text-xl font-semibold' to='/product/kids'>Kids Page</Link>
      </div>

      <Outlet />
    </div>
  )
}

export default Product