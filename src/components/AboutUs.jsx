import React from 'react';
import HeroSection from './HeroSection';
import Section from './Section';
import CardsCombo from './CardsCombo'; // Adjust based on your setup

export default function AboutUs() {
  const threeCardsData = [
    {
      heading: 'Our Mission',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxPTXAed-qgcCVasHFAc2N77qP06KrlV4rA&s',
      description:
        'Our mission is to provide a comprehensive platform for individuals to deepen their understanding and connection with the Quran. We aim to empower our students through specialized courses and personalized guidance.'
    },
    {
      heading: 'Our Vision',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxPTXAed-qgcCVasHFAc2N77qP06KrlV4rA&s',
      description:
        'We envision a world where every individual has the opportunity to explore the teachings of the Quran and incorporate them into their daily lives. Through our educational programs, we strive to foster a deeper spiritual connection and a stronger sense of community.'
    },
    {
      heading: 'Our Values',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxPTXAed-qgcCVasHFAc2N77qP06KrlV4rA&s',
      description:
        'Integrity, Compassion, and Excellence are the core values that guide our organization. We are committed to providing a transformative learning experience while upholding the highest standards of ethics and professionalism.'
    }
  ];

  return (
    <>
      <HeroSection imageUrl="/HomePage.png"  height="h-[100px]">
        <h1>About Us</h1>
      </HeroSection>

      <div className="flex flex-col gap-8 mt-8 ">
        <Section
          heading="Our Story"
          subheading="Inspiring Generations through the Quran"
          description="QuranApp was founded with a vision to make the teachings of the Quran accessible to people from all walks of life. We believe that the Quran holds the key to spiritual growth and personal transformation, and we are dedicated to empowering our students to unlock its profound wisdom."
        />
              

          <Section
            heading="Our Commitment"
            subheading="Dedicated to Your Spiritual Journey"
            description="At QuranApp, we are committed to providing a transformative learning experience. Our team of experienced scholars and dedicated instructors work tirelessly to create engaging and impactful programs that cater to the diverse needs of our students."
          />
        

        <CardsCombo cardsData={threeCardsData} />
      </div>
    </>
  );
}