import React from 'react'

const ListBox = ({children}) => {
  return (
    <div className='flex-1 h-1/2 md:h-full bg-[#2a2a2a75] rounded-xl text-[#fffff6] font-semibold flex justify-center items-center'>
      {children}
    </div>
  )
}

export default ListBox
