import { socialIcons } from '@/constants/social-icons'
import Link from 'next/link'
import React from 'react'

const SocialMedia = () => {
  return (
    <>
     <ul className="flex flex-col md:flex-row gap-3">
        {socialIcons.map((val,index) => {
            return(
                <li key={index} className="flex items-center ">
                    <Link href={val.url} target="_blank" className="text-fs16 flex items-center ">
                        <span className="me-2">{val.icon}</span> {val.name}
                    </Link>
                </li>
            )
        })}
     </ul>
    </>
  )
}

export default SocialMedia