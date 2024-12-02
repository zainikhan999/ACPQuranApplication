import React from 'react'
import Herosection from './Herosection'
import Section from './Section'
import Image from './Image'
import Cardscombo from './Cardscombo'
export default function Course() {
  const threeCardsData = [
    {
        heading: "Tajweed Course",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxPTXAed-qgcCVasHFAc2N77qP06KrlV4rA&s",
        description: "Enhance your Quran recitation by mastering Tajweed rules. This course focuses on correct pronunciation, rhythm, and articulation, ensuring you recite the Quran beautifully and accurately."
    },
    {
        heading: "Hifz",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxPTXAed-qgcCVasHFAc2N77qP06KrlV4rA&s",
        description: "Embark on the journey of memorizing the Quran with our Hifz program. Structured lessons, daily review sessions, and personalized plans will help you commit the Quran to memory effectively."
    },
    {
        heading: "Translation & Tafsir",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxPTXAed-qgcCVasHFAc2N77qP06KrlV4rA&s",
        description: "Dive deep into the meanings of the Quran with our Translation and Tafsir course. Explore the historical context, themes, and wisdom behind the verses, gaining insights that enrich your spiritual journey."
    },
];

  return (
    
   <>
    <Herosection imageUrl="/HomePage.png" height="h-[200px]">
      <h1>Courses</h1>
    </Herosection>
    <div className='flex flex-row gap-8 '>
    
    <Section
      heading="Quran Recitation Course"
      subheading="Learn Proper Pronunciation and Tajweed"
      description="This course focuses on helping students recite the Quran with precision, mastering the rules of Tajweed under the guidance of experienced teachers. Ideal for those seeking to improve their pronunciation and recitation skills."
    />
    <Image
      Imageurl="./WomenReading.png"
    /> 
   </div>
   
   <div className='flex flex-row gap-8'>
   <Image
      Imageurl="./ReadingSupport.png"
    />
    <Section
      heading="Quran Tafseer Course"
      subheading="Gain Deeper Insights into Quranic Meanings"
      description="In our Tafseer course, students explore the meanings and interpretations of Quranic verses, guided by scholarly interpretations. This course encourages deeper understanding of the Quran’s messages and themes."
    />
    </div>
    <div className='flex flex-row gap-8'>
 
    <Section
      heading="Hifz"
      subheading="Memorize Quran from our leading scholars"
      description="Our Hifz Course is designed for those wanting to memorize the Quran. The course allows the students to connect via whatapp call/audio with the scholar for regular assessments."
    />
    <Image
      Imageurl="./ReadingLeft.png"
    />
    </div>


      <Cardscombo cardsData={threeCardsData}/>
   </>
  )
}
