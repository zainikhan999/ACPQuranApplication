import React from 'react'

export default function Image({Imageurl}) {
  return (
    <div className='w-1/2 p-10'>
      <img src={Imageurl} alt="Quran" className=" w-[69%] h-[80%] m-auto " />
    </div>
  )
}
