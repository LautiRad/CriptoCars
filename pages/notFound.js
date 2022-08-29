import React from 'react'
import Image from 'next/image'
import NotFoundImg from '../public/images/full.png'

const NotFound = () => {
  return (
    <div>
        <Image src={NotFoundImg} className="NotFound-img" alt="NotFound-img" />
        <h2>Error 404.</h2>
    </div>
  )
}

export default NotFound