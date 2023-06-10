import React from 'react'
import { footerBottomItem } from '../../constants'

function FooterBottom() {
  return (
    <div className='w-full bg-footerBottom py-8'>
      <div className='mx-w-5xl mx-auto px-5'>
        <div className='w-full grid grid-cols-3 md:grid-cols-5 mdl:grid-cols-6 lgl:grid-cols-7 
                         gap-3 place-content-center text-gray-400'>
            {
                footerBottomItem.map((item)=>(
                    <div className='group' key={item.id}>
                        <h3 className='w-24 font-semibold text-[12px] group-hover:underline 
                                     text-[#DDD] leading-3 mb-[2px] cursor-pointer'>
                                {item.title}
                        </h3>
                        <p className='w-24 tracking-tight text-[12px] text-[#999] 
                                      group-hover:underline leading-3 cursor-pointer'>
                                        {item.des}
                        </p>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default FooterBottom
