import React, {useState, useEffect} from 'react'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@admullan')
        .then(resp => resp.json())
        .then(blogs => setBlogs(blogs.items))
    }, [])

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