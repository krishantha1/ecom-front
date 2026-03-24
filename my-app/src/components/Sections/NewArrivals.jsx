import React from 'react'
import SectionHeading from './SectionHeading/SectionHeading'
import Card from '../Card/Card'

import CarouselLib from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Carousel = CarouselLib.default || CarouselLib;

import Jeans from '../../assets/img/jeans.jpg'
import Shirts from '../../assets/img/shirts.jpg'
import Tshirt from '../../assets/img/tshirts.jpeg'
import Dresses from '../../assets/img/dresses.jpg'
import Joggers from '../../assets/img/joggers.jpg'
import Kurtis from '../../assets/img/kurtis.jpg'

import { responsive } from '../Utils/SectionConstants';

const items = [
  { title: 'Jeans', imagePath: Jeans },
  { title: 'Shirts', imagePath: Shirts },
  { title: 'T-Shirts', imagePath: Tshirt },
  { title: 'Dresses', imagePath: Dresses },
  { title: 'Joggers', imagePath: Joggers },
  { title: 'Kurtis', imagePath: Kurtis }
]

const NewArrivals = () => {
  return (
    <>
      <SectionHeading title={"New Arrivals"} />

      <Carousel 
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={false}
        partialVisible={false}
        itemClass ={"react-slider-custom-item"}
        className='px-8'
      >
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            imagePath={item.imagePath}
          />
        ))}
      </Carousel>
    </>
  )
}

export default NewArrivals