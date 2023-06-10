import React from 'react'
import FooterMiddleList from './FooterMiddleList'
import { middleList } from '../../constants'
import { logo,flag } from '../../assets'

function FooterMiddle() {
  return (
    <div className='w-full bg-amazon_light text-white'>
      <div className='w-full border-b-[1px] border-gray-500 p-10'>
         <div className='max-w-5xl mx-auto text-gray-300'>
           <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4
                           md:place-items-center md:items-start gap-6'>
             {
                middleList.map((item)=>(
                  <FooterMiddleList 
                     key={item._id}
                     title={item.title}
                     listItem={item.listItem}/>
                ))
             }
           </div>
         </div>
      </div>
                    {/*Next section in Footer middle*/}
       <div className='w-full flex gap-6 items-center justify-center md:py-6 p-10'>
         <div>
          <img className='w-20 pt-3' src={logo} alt='logo'/>
         </div>
         <div className='flex gap-2'>
          <p className='text-sm flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow 
                        cursor-pointer duration-200 px-2 py-1'>
            English
          </p>
         </div>
         <div className='text-sm flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow 
                        cursor-pointer duration-200 px-2 py-1'>
          <img className='md:w-6 w-8' src={flag} alt='flag'/>
          <p className='hidden md:inline-flex'>United Arab Emirates</p>
         </div>
      </div>
    </div>
  )
}

export default FooterMiddle
