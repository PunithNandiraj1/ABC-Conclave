import React from 'react'
import Heading from '@/components/ui/Heading'
const Youtube = () => {
  return (
    <div className='my-10'>
        <Heading title="Our Recent Videos"/>
    <div className='grid grid-cols-3 items-center justify-center gap-x-10 mx-auto my-8 px-10'>
        <iframe width="400" height="250" src="https://www.youtube.com/embed/ba7SrDeweR4?si=8_ShgKyC3LwPBkU3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <iframe width="400" height="250" src="https://www.youtube.com/embed/ba7SrDeweR4?si=8_ShgKyC3LwPBkU3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <iframe width="400" height="250" src="https://www.youtube.com/embed/ba7SrDeweR4?si=8_ShgKyC3LwPBkU3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </div>

  )
}

export default Youtube