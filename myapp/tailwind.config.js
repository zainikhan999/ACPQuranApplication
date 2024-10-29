/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#004D40	', // Warm Beige or #e3dac9 for Soft Sand
        headings: '#FFD54F', // Dark Green
        subheadings: '#A7FFEB', // Primary Text or #4a4a4a for Secondary Text
        bodyText: '#FFFFFF', // Primary Text
        navigationBar: '#004D40', // Dark Green with Gold accents (#d4a017)
        primaryButton: '#FFD54F', // Gold for primary actions
        secondaryButton: '#A7FFEB', // Dark Green for secondary actions
        iconsAndBorders: '#FFD54F', // Gold
        footerBackground: '#00332A	', // Dark Green
        footerText: '#FFFFFF', // Off-White
    },
    
    },
  },
  plugins: [],
}