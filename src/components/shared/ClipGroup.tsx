import React from 'react'
import Clips from './Clips'

interface Props {
  title: string;
  arr: {id: number, src: string, poster: string}[]
}

const ClipGroup:React.FC<Props> = ({title, arr}) => {
  return (
    <div>
      <h4 className='text-base font-bold text-secondary text-center'>{title}</h4>
      <Clips arrToUse={arr} alt={title} imageStyle='h-72' className='grid gap-3 xl:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'/>
    </div>
  )
}

export default ClipGroup