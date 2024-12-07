import React from 'react'
import Herosection from './Herosection'
import Section from './Section'
import Image from './Image'
import Cardscombo from './Cardscombo'
export default function Course() {
  const threeCardsData = [
    {
        heading: "Our Mission",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxPTXAed-qgcCVasHFAc2N77qP06KrlV4rA&s",
        description: "Founded on the principles of excellence and devotion, Bliss strives to promote the beauty of Quranic recitation. We believe that understanding and applying Tajweed rules is essential for conveying the true essence of the Quran"
    },
    {
        heading: "Our Vision",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxPTXAed-qgcCVasHFAc2N77qP06KrlV4rA&s",
        description: "We are dedicated to empowering learners of all ages with the knowledge and skills needed to recite the Quran beautifully and accurately. Providing the best platform to learn whatsapp communities"
    }, 
    {
        heading: "Join Us on This Journey",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxPTXAed-qgcCVasHFAc2N77qP06KrlV4rA&s",
        description: "Become a part of our vibrant community at Bliss Quran, where we celebrate the beauty of Quranic recitation. Together, we will explore the intricacies of Tajweed, support one another in our learning."
    },
];

  return (
    
   <>
    <Herosection imageUrl="/HomePage.png" height="h-[200px]">
      <h1>About Us</h1>
    </Herosection>
    <div className='flex flex-row gap-8 '>
    
   <Section
      heading="Our Mission"
      description="Founded on the principles of excellence and devotion, Bliss strives to promote the beauty of Quranic recitation. We believe that understanding and applying Tajweed rules is essential for conveying the true essence of the Quran"
    />
    <Image
      Imageurl="/WomenReading.png"
    /> 
   </div>
   
   <div className='flex flex-row gap-8'>
   <Image
      Imageurl="/ReadingSupport.png"
    />
    <Section
      heading="Our Vision"
      
      description="e are dedicated to empowering learners of all ages with the knowledge and skills needed to recite the Quran beautifully and accurately."
    />
    </div>
    <div className='flex flex-row gap-8'>
 
    <Section
      heading="Join Us on This Journey"
      description="Become a part of our vibrant community at Bliss Quran, where we celebrate the beauty of Quranic recitation. Together, we will explore the intricacies of Tajweed, support one another in our learning, and cultivate a deeper appreciation for the Quran in our lives."
    />
    <Image
      Imageurl="./ReadingLeft.png"
    />    </div>


      <Cardscombo cardsData={threeCardsData}/>
</>
)
}