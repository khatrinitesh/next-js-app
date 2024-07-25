import { Montserrat, Poppins } from 'next/font/google'


export const montserrat = Montserrat({
    subsets: ['latin'],
    weights: ['400'], 
    variable:'--font-montserrat'
  })
  export const poppins = Poppins({ 
    subsets: ['latin'], 
    variable: "--font-poppins",
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] // Specify the weights you need
  });