import { FaGithub,FaCodepen,FaLinkedinIn, FaBolt, FaCode, FaWrench   } from "react-icons/fa";

export const imagesData = [
  { url: 'https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80', color: 'bg-green-500' },
  { url: 'https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80', color: 'bg-blue-500' },
  { url: 'https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80', color: 'bg-yellow-500' },
  { url: 'https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80', color: 'bg-red-500' },
];


// Define an array of objects for the blog items
export const blogItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80',
    date: '8th May 2024',
    title: 'Blog Title 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores...',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80',
    date: '8th May 2024',
    title: 'Blog Title 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores...',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80',
    date: '8th May 2024',
    title: 'Blog Title 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores...',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80',
    date: '8th May 2024',
    title: 'Blog Title 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores...',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80',
    date: '8th May 2024',
    title: 'Blog Title 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores...',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80',
    date: '8th May 2024',
    title: 'Blog Title 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores...',
  },
];

// Define an array of objects for the feature boxes
export const featureBoxes = [
  {
    id: 1,
    icon: FaBolt,
    title: 'Fresh Design',
    description: 'FWR blocks bring in an air of fresh design with their creative layouts and blocks, which are easily customizable.'
  },
  {
    id: 2,
    icon: FaCode ,
    title: 'Clean Code',
    description: 'FWR blocks are the cleanest pieces of HTML blocks, which are built with utmost care to quality and usability.'
  },
  {
    id: 3,
    icon: FaWrench ,
    title: 'Perfect Tool',
    description: 'FWR blocks is a perfect tool for designers, developers and agencies looking to create stunning websites in no time.'
  }
];

// Define an array of objects for the list items
// export const menuItems = [
//   { id: 1, href: '/', label: 'Intro' },
//   { id: 2, href: '/blog', label: 'Blog' },
//   { id: 3, href: '/uses', label: 'Uses' },
//   { id: 4, href: '/product', label: 'Product' },
//   { id: 5, href: '/contact', label: 'Contact' }
// ];
export const menuSidebar = [
  { id: 1, href: '/',color:'text-white', text: 'Intro' },
  { id: 2, href: '/blog',color:'text-white', text: 'Blog' },
  { id: 3, href: '/uses',color:'text-white', text: 'Uses' },
  { id: 4, href: '/contact',color:'text-white', text: 'Contact' }
];

// social media icon
export const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/', icon: FaGithub },
    { name: 'CodePen', url: 'https://codepen.io/', icon: FaCodepen  },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/', icon: FaLinkedinIn  }
];