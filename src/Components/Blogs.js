import React, {useState, useLayoutEffect} from 'react'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useLayoutEffect(() => {
        getBlogs()
    }, [])

    const getBlogs = async () => {
        let allBlogs = []
        await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@admullan')
        .then(resp => resp.json())
        .then(blogs => allBlogs = blogs.items)
        setBlogs(allBlogs)
    }

    return (
        <div className="content">
            {blogs.map(blog => {
                return(
                    <div>
                        <h1><a href={blog.link} target="_blank" rel="noreferrer">{blog.title}</a></h1>
                        <img src={blog.thumbnail} alt={blog.tile}/>
                        <br />
                        <br />
                    </div>
                )})
        }
        </div>
    )
}

export default Blogs