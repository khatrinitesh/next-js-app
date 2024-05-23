/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["selector"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Light theme colors
        'primaryL': '#ffffff',
        'secondaryL': '#cccccc',
        // Dark theme colors
        'primaryD': '#072344',
        'secondaryD': '#00aaa1',
        'defaultgreen':'#009fab',
        'hovergreen':'#007c85',
        'red':'#ff0000'
     },
     fontFamily: {
       'poppinsR': ['PoppinsR'],
       'poppinsL': ['PoppinsL'],
       'poppinsSB': ['PoppinsSB'],
     },
     fontSize: {
       // Define font sizes based on your variables
       'bodyBase': '2vh',
       'fs1': '0.11vh',
       'fs2': '0.21vh',
       'fs4': '0.42vh',
       'fs8': '0.85vh',
       'fs10': '1.06vh',
       'fs12': '1.27vh',
       'fs14': '1.48vh',
       'fs16': '1.69vh',
       'fs18': '1.90vh',
       'fs20': '2.11vh',
       'fs22': '2.32vh',
       'fs24': '2.54vh',
       'fs26': '2.75vh',
       'fs28': '2.97vh',
       'fs30': '3.17vh',
       'fs32': '3.39vh',
       'fs34': '3.60vh',
       'fs36': '3.81vh',
       'fs38': '4.02vh',
       'fs40': '4.23vh',
       'fs42': '4.44vh',
       'fs44': '4.66vh',
       'fs46': '4.87vh',
       'fs48': '5.08vh',
       'fs50': '5.29vh',
     },
    },
  },
  plugins: [],
};
