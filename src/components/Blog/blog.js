import React from 'react';
import './blog.css';
import Blogimage1 from '../../assets/blogimage1.png';

const Blog = () =>  {
  return (
    <section id='blog'>
<h2 className="blogTitle">My Blog</h2>
<span className="blogDesc">Lorem</span>
       <div className="blogImgs">
        <img src={Blogimage1} alt="" className="blogImg" />
        </div>
       <button className="blogBtn">See More</button>
    </section>    
  );
}

export default Blog;



