// File: src/components/dist/Blog.jsx
import React from 'react';
import Nav from '../Nav/nav'
import Main from './dist/Main/main'
import Footer from './dist/Footer/footer'
import Section from './dist/Section/section'

const Blog = ({ Blog }) => {
  return (
    <div>
      <Nav></Nav>
      <Main/>
      <Section/>
      <Footer/>
    </div>
  );
}

export default Blog;