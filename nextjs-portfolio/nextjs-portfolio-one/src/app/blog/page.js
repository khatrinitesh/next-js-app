import React from 'react';
// components
import Banner from '../../components/Banner';
import BlogSection from '../../components/BlogSection';
import MainLayout from '../layout/MainLayout';

const Blog = () => {
  return (
    <MainLayout>
    <div className='content'>
     <Banner title="Blog" desc="Proident voluptate cupidatat voluptate veniam occaecat eiusmod officia nulla."/>
     <BlogSection/>
    </div>
    </MainLayout>
  )
}

export default Blog