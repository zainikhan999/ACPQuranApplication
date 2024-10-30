import React from 'react'
import HeroSection from './Herosection'
import Homesection from './Homesection'
import Section from './Section'
import Image from './Image'
import Cardscombo from './Cardscombo'
import { Link } from 'react-router-dom';
import TestimonialSlider from './TestimonialSlider';

export default function Home() {
  // Array for 4 cards

  const fourCardsData = [
    {
      heading: "Tajweed",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxPTXAed-qgcCVasHFAc2N77qP06KrlV4rA&s",
      description: "Description for Tajweed",
    },
    {
      heading: "Tafseer",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxPTXAed-qgcCVasHFAc2N77qP06KrlV4rA&s",
      description: "Description for Tafseer",
    },
    {
      heading: "Quran Recitation",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxPTXAed-qgcCVasHFAc2N77qP06KrlV4rA&s",
      description: "Description for Quran Recitation",
    },
    {
      heading: "Arabic Language",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxPTXAed-qgcCVasHFAc2N77qP06KrlV4rA&s",
      description: "Description for Arabic Language",
    },
  ];

  // Array for 3 cards
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

      <HeroSection imageUrl="/HomePage.png" height="h-[550px]">
        <h1 className="text-5xl font-bold mb-5">Welcome To Quran Bliss Online Acadmey</h1>
        <h2 className="text-5xl mt-4">ٱلَّذِينَ ءَامَنُوا۟ وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ ٱللَّهِ ۗ أَلَا بِذِكْرِ ٱللَّهِ تَطْمَئِنُّ ٱلْقُلُوبُ ٢٨</h2>
        <h2 className='text-2xl mt-4 text-[#A7FFEB] w-3/5 '>“Those who believe and whose hearts find comfort in the remembrance of Allah. Surely in the remembrance of Allah do hearts find comfort”</h2>
        <div className="flex justify-center">
          <Link
            to="/signup"
            className="bg-[#FFD54F] rounded-md w-44 p-2 text-center  mt-4 hover:bg-green-600"
          >
            Sign Up
          </Link>
        </div>
      </HeroSection>
      <Homesection />
      <div className='flex flex-row gap-8'>
        <Section
          heading="Learn, Recite, and Memorize the Quran with Expert Guidance"
          subheading="Join a community dedicated to spreading knowledge."
          description="At Quran Bliss, we offer a comprehensive, personalized 
        learning experience to help students of all ages understand and memorize 
        the Quran. Our certified and highly experienced teachers are committed to 
        making Quranic education accessible, engaging, and effective. Learn 
        from the comfort of your home with courses designed to build a strong 
        foundation in recitation, memorization, and understanding."

        />
        <Image
          Imageurl="/WomenReading.png" />
      </div>

      {/* Using 3 cards */}
      <Cardscombo cardsData={threeCardsData} />

      <div className='flex flex-row gap-8 '>
        <Section
          heading="Why Choose Quran Bliss?"
          subheading="Dedicated to Your Learning and Spiritual Growth"
          description="From beginners to advanced students, our courses are designed 
          to meet you where you are on your Quranic journey. Learn proper recitation, 
          master Tajweed rules, begin memorization, or explore the meanings with Tafsir. 
          We offer a range of courses to support and inspire each student’s unique path.
          Our instructors are not only highly qualified but also deeply passionate
          about Quranic education. With years of experience and expertise, 
          they guide students with personalized attention, patience, and 
          encouragement, making learning both effective and enjoyable."
        />
        <Image
          Imageurl="/chooseus.png" 
          />

      </div>
    
      <h1 className='text-center mb-9 '>Our Testimonials</h1>
      <TestimonialSlider/>
  
    </>
  )
}
