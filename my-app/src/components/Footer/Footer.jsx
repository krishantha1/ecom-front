import React from 'react'
import FacebookIcon from '../common/FbIcon'
import InstagramIcon from '../common/InstagramIcon'
import EmailIcon from '../common/EmailIcon'
import TwitterIcon from '../common/TwitterIcon'

const Footer = ({ content }) => {
  return (
    <div className='bg-black text-white'>
      <div className='flex p-8 justify-around gap-[40px]'>
        
        {content?.items?.map((item, index) => (
          <div key={item?.title || index} className='flex flex-col'>
            
            {/* Title */}
            <p className='text-[16px] pb-[10px]'>
              {item?.title}
            </p>

            {/* Links */}
            {item?.list?.map((listItem, i) => (
              <a
                key={listItem?.label || i}
                className='flex flex-col text-[12px] py-2'
                href={listItem?.path}
              >
                {listItem?.label}
              </a>
            ))}

            {/* Description */}
            {item?.description && <p>{item?.description}</p>}
          
          </div>
        ))}

      </div>

      {/* Social Icons */}
      <div className='flex gap-4 items-center justify-center py-4'>
        <a href='/fb'><FacebookIcon /></a>
        <a href='/insta'><InstagramIcon /></a>
        <a href='/twit'><TwitterIcon /></a>
        <a href='/email'><EmailIcon /></a>
      </div>

      {/* Copyright */}
      <p className='text-sm text-center'>
        {content?.copyright}
      </p>
    </div>
  )
}

export default Footer