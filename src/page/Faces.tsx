import React from 'react'
import HeroFaces from '../components/faces/HeroFaces'
import ExclusiveFaces from '../components/faces/ExclusiveFaces'

export const Faces: React.FC = () => {
  return (
    <main className='bg-bg'>
      <HeroFaces/>
      <ExclusiveFaces/>
    </main>
  )
}
