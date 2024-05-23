/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["selector"],
  theme: {
    extend: {
      fontFamily:{
        'poppinsregular':'PoppinsRegular'
      },
      fontSize:{
        'fsbase':'2vh', // base
        'fs8': '0.5vh',
        'fs10': '0.625vh',
        'fs12': '0.75vh',
        'fs14': '0.875vh',
        'fs16': '1.69vh',
        'fs18': '1.125vh',
        'fs20': '1.25vh',
        'fs22': '1.375vh',
        'fs24': '1.5vh',
        'fs26': '1.625vh',
        'fs28': '1.75vh',
        'fs30': '1.875vh',
        'fs32': '3.38vh',
        'fs34': '2.125vh',
        'fs36': '2.25vh',
        'fs38': '2.375vh',
        'fs40': '2.5vh',
        'fs42': '2.625vh',
        'fs44': '2.75vh',
        'fs46': '2.875vh',
        'fs48': '3vh',
        'fs50': '3.125vh',
      },
      colors: {
        primary:'#c13d60',
        secondary:'#55872c',
        primaryLight: "#fff", // Light theme primary color
        textLight:'#000', // Light theme primary color
        primaryDark: "#000", // Dark theme primary color
        textDark:'#fff', // Dark theme primary color
      },
    },
  },
  plugins: [],
};
