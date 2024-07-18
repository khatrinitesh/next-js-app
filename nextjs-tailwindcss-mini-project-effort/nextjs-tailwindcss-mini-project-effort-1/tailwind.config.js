/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'primarycolor':'#24acf2',
        'secondarycolor':'orange',
        'blackcolor':'#000',
        'whitecolor':'#fff'
      },
      backgroundImage: {
        "gradient-conic":
        'linear-gradient(to bottom, #ff8c00, #ff0080)',
      },
      fontFamily: {
        rubik: ['Rubik'],
        siemensprogressb: ['SiemensprogressBold'],
        simplesummer:['SimpleSummer']
      },

      screens: {
        // only iphone different model 
        'iphone-se': {'raw': '(min-device-width: 320px) and (max-device-height: 568px) and (-webkit-device-pixel-ratio: 2)'},
        'iphone-6-7-8': {'raw': '(min-device-width: 375px) and (max-device-height: 667px) and (-webkit-device-pixel-ratio: 2)'},
        'iphone-x-11-pro': {'ra w': '(min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3)'},
        'iphone-12-pro-13-pro': {'raw': '(min-device-width: 390px) and (max-device-height: 844px) and (-webkit-device-pixel-ratio: 3)'},
        'iphone-14-15-pro': {'raw': '(min-device-width: 393px) and (max-device-height: 852px) and (-webkit-device-pixel-ratio: 3)'},
        'iphone-6-7-8-plus': {'raw': '(min-device-width: 414px) and (max-device-height: 736px) and (-webkit-device-pixel-ratio: 3)'},
        'iphone-11': {'raw': '(min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 2)'},
        'iphone-xs-max-11-pro-max': {'raw': '(min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 3)'},
        'iphone-x-xs-max-11-pro-max-12-pro-max-13-pro-max-14-plus': {'raw': '(min-device-width: 428px) and (max-device-height: 926px) and (-webkit-device-pixel-ratio: 3)'},
        'iphone-14-15-pro-max': {'raw': '(min-device-width: 430px) and (max-device-height: 932px) and (-webkit-device-pixel-ratio: 3)'},
      },
    },
  },
  plugins: [],
};
