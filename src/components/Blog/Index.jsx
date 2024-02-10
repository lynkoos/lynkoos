// File: src/components/dist/Blog.jsx
import React from 'react';
import Nav from './dist/Nav/nav'
// import Footer from './dist/Footer/footer.jsx'
// import Main from './dist/Main/main.jsx'
import Section from './dist/Section/section'

const Blog = ({ Blog }) => {
  return (
    <div className='landing-page'>
      <Nav></Nav> 
      {/* <Main></Main> */}
      <Section></Section>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default Blog;