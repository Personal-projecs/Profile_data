import React from 'react'

const Card = ({name,image,age,mail,address,pro}) => {
  
  return (
    <div className='w-[360px] rounded-md   h-24 mx-auto   flex flex-row shadow-lg border-2'>
        <div className='w-11/12   flex flex-row'>
            <div className='w-2/6   flex justify-center items-center '>
                <img src={image} className="rounded-full"></img>
            </div>
            <div className='w-4/6 ml-2 flex flex-col justify-center flex-wrap '>
              <div className=' '>{name} | {age} </div>
              <div className='text-sm'>{mail}</div>
              <div className='text-xs'>{address}</div>
            </div>
        </div>
        <div className='w-1/12  text-xs flex justify-end mr-2'>{pro}</div>
    
    </div>
  )
}

export default Card