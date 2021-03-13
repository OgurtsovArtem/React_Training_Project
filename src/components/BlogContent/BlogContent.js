import React from 'react'

import './BlogContent.css'

import BlogCard from '../BlogCard/BlogCard'
import SidebarRandom from '../SidebarRandom/SidebarRandom'

function BlogContent()  {
    return (
        <section className="blog">
            <div className='blog__container width-control'>
                <div className="blog__card-container">
                    <BlogCard />
                </div>
                <aside className='blog__sidebar-container'>
                    {/* <SidebarPopular /> */}
                    <SidebarRandom />
                </aside>
            </div>
        </section>
    );
}

export default BlogContent;