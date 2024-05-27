import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popular} from '../Components/Popular/popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollection } from '../Components/NewCollection/NewCollection'

export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
    </div>
  )
}
