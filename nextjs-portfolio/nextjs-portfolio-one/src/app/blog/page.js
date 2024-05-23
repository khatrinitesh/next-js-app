import React from 'react';
// components
import Banner from '../../components/Banner';
import BlogSection from '../../components/BlogSection';

const Blog = () => {
  return (
    <div className='content'>
     <Banner title="Blog" desc="Proident voluptate cupidatat voluptate veniam occaecat eiusmod officia nulla."/>
     <BlogSection/>
    </div>
  )
}

export default Blog