
module.exports = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize:{
        // mobile device
        'MDesc':'1.69vh',
        'Mheadtitle':'3.39vh',
        // desktop device
        'Dheadtitle':'1.67vw',
        'DDesc':'0.83vw',
      }
    },
  },
  plugins: [],
};
