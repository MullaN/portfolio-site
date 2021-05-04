import React from 'react'

const Blogs = ({blogs = []}) => {
    return (
        <div className="content">
            {blogs.map(blog => {
                return(
                    <div>
                        <h1><a href={blog.link} target="_blank" rel="noreferrer">{blog.title}</a></h1>
                        <img src={blog.thumbnail} alt={blog.tile}/>
                        <br />
                        <hr />
                        <br />
                    </div>
                )})
        }
        </div>
    )
}

export default Blogs