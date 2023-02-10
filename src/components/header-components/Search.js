import React from 'react'

const Search = () => {
  return (
    <form className='flex items-center flex-1 w-full'>
        <input type="text" placeholder='Search' className='h-10 border-2 border-r w-full  px-3 rounded-l-lg border-primary outline-none'/>
        <select name="" id="" className='h-10 px-2 outline-none border-2 border-primary border-l-0'>
            <option className='outline-none' value="all-category">All category</option>
            <option className='outline-none' value="">Same</option>
            <option className='outline-none' value="">wHY</option>
        </select>
        <button className='bg-primary h-10 px-5 rounded-r-lg border-2 border-primary text-white'>Search</button>        
    </form>
  )
}

export default Search