import React, { useState, useEffect } from 'react'

const Banner = () => {
    
    const [scrolled, setScrolled] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return function clear() {window.removeEventListener('scroll', handleScroll)}
    })

    const handleScroll = (e) => {
        setScrolled(window.scrollY)
    }

    return (
        <div className="banner" style={{height: (window.innerHeight - scrolled)}}>
            {scrolled ? <></> : <img src="./IMG_0071.JPG" alt="Andrew Mullan"></img>}
            <h1>Andrew Mullan</h1>
            {scrolled ? <></> : <h2>Javascript, React, Ruby, Ruby on Rails Developer</h2>}
        </div>
    )
}

export default Banner