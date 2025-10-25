import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div className='inline-flex items-center gap-[5px] w-24 h-[26px]'>
            <Image
                src="/favicon.ico"
                alt="Logo"
                width={26}
                height={26}
                className='object-cover'
            />
            <span className="text-[#181817] text-2xl font-semibold leading-[21px]" style={{fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif'}}>
                ResolveCX
            </span>
        </div>
    )
}

export default Logo