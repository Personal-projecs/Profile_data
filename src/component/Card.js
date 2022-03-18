import React from 'react'

const Card = ({name,image,age,mail,address,pro}) => {
  return (
    <div className='w-[400px]  h-24 mx-auto border-2 flex flex-row shadow'>
        <div className='w-11/12 border-2 flex flex-row'>
            <div className='w-2/6 border-2 flex justify-center items-center '>
                <img src={image} className="rounded-full"></img>
            </div>
            <div className='w-4/6 border-2'></div>
        </div>
        <div className='w-1/12 border-2 '></div>
    
    </div>
  )
}

export default Card