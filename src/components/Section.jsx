import React from 'react'

export default function section({heading,subheading,description}) {
  return (
    <div className='flex flex-col gap-5 items-left
    w-1/2 p-10 pt-20 ml-10
    text-justify '>
      <h1>{heading}</h1>
      <h2>{subheading}</h2>
      <p>{description}</p>
    </div>
  )
}