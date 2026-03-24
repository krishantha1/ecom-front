import React from 'react'
import Navigation from './components/navigation/Navigation'
import HeroSection from './components/HeroSection/HeroSection'
import NewArrivals from './components/Sections/NewArrivals'
import Category from './components/Sections/Categories/Category'

const Shop = () => {
  return (
    <>
    <Navigation/>
    <HeroSection/>
    <NewArrivals/>
    <Category/>
    </>
  )
}

export default Shop
