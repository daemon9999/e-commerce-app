import Title from 'components/additional-components/Title'
import React from 'react'
import items from "api/items.json"
const Recommended = () => {
  return (
    <div className='flex flex-col mt-3 gap-y-5'>
        <Title>Recommended items</Title>
        <div className='grid grid-cols-5 gap-5'>
            {items.map(item => (
                <div key={item.id} className='flex hover:scale-105 transition-transform cursor-pointer hover:border-gray-500 flex-col items-center  bg-white rounded-md border border-border py-2'>
                    <span className='w-[200px] h-[200px] flex items-center justify-center p-5'>
                        <img src={`/images/${item.img}.png`} alt={item.title} className='h-full w-full'/>
                    </span>
                    <div className='mr-auto px-3'>
                        <span className='font-medium'>${item.price}</span>
                        <p className='text-gray-500 w-[80%]'>{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Recommended