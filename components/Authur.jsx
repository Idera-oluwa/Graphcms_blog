import React from 'react'
import Image from 'next/image'

const Authur = ({authur}) => {
    return (
        <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20'>
        <div className='absolute left-0 right-0 -top-14'>
            <Image 
            alt={authur.name}
            width='100px'
            height='100px'
            unoptimized
            className='align-middle rounded-full h-[100px] w-[100px]'
            src={authur.photo.url}
            />
                </div>
            <h3 className='text-white my-4 text-xl font-bold'>{authur.name}</h3>
            <p className='text-white text-lg'>{authur.bio}</p>
        </div>
    )
}

export default Authur
