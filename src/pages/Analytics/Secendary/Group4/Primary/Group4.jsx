import React from 'react'
import Box_1 from '../Secandary/Box_1'
import Box_2 from '../Secandary/Box_2'
import Box_3 from '../Secandary/Box_3'
import Box_4 from '../Secandary/Box_4'

const Group4 = () => {
  return (
    <div className='lg:col-span-4 sm:col-span-4 grid grid-rows-2 grid-cols-2 gap-5'>

      <Box_1 />

      <Box_2 />

      <Box_3 />

      <Box_4 />
    </div>
  )
}

export default Group4