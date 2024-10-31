import React from 'react'
import HeroSection from './HeroSection'
import Section from './Section'
import Image from './Image'
import CardsCombo from './CardsCombo'
import { Link } from 'react-router-dom'
export default function AboutUs() {
  return (
    
   <>
    <HeroSection imageUrl="/home.png" height="h-[150px]">
      <h1>About Us</h1>
    </HeroSection>
    <div className='flex flex-row gap-8 '>
    
    <Section
      heading="Our Mission"
      subheading="We strive to empower individuals by providing a comprehensive platform for exploring the Quran."
      description="At our Quran App, our mission is to provide an accessible and enriching experience for everyone who seeks to engage with the Quran. We aim to bridge the gap between tradition and technology, making the teachings of the Quran available at your fingertips.

"
    />
    <Image
          Imageurl="./rightpose.png"
    /> 
   </div>
   
   <div className='flex flex-row gap-8'>
   <Image
      Imageurl="./reading.png"
      />
    <Section
      heading="Our Vision"
      subheading="To learn real meanings of Quran"
      description="We strive to empower individuals by providing a comprehensive platform for exploring the Quran, promoting knowledge, reflection, and spiritual growth."
    />
    </div>
    <div className='flex flex-row gap-8'>
 
    <Section
      heading="Our Aspiration"
      subheading="Empower users to embark on a meaningful spiritual journey"
      description="We aspire to bridge cultural divides through the universal message of the Quran, encouraging curiosity, respect, and dialogue among all individuals."
    />
    <Image
      Imageurl="./Frontview.png"
    />
    </div>


   </>
  )
}