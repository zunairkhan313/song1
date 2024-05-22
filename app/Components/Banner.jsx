"use client"

import Carousel from 'react-bootstrap/Carousel';
import Banner1 from "../../public/Images/Banner.jpg"
import Banner2 from "../../public/Images/Banner1.jpg"
// import Banner2 from "../../public/Images/Banner2.jpg"
// import Banner3 from "../../public/Images/Banner3.jpg"
import Image from 'next/image';

export default function CarouselPage() {
 
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={Banner1} alt="Banner1" className='img-fluid w-full max-w-full'/>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Banner2} alt="Banner2" className='img-fluid w-full max-w-full'/>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Banner1} alt="Banner3" className='img-fluid w-full max-w-full'/>
      </Carousel.Item>
    </Carousel>
  );
}