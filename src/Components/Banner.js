import React from 'react'

const Banner = ({scrolled}) => {

    return (
        <div className="banner" style={{height: scrolled}}>
            {scrolled < window.innerHeight ? <></> : <img src="./IMG_0071.JPG" alt="Andrew Mullan"></img>}
            <h1>Andrew Mullan</h1>
            {scrolled < window.innerHeight ? <></> : <h2>Javascript, React, Ruby, Ruby on Rails Developer</h2>}
        </div>
    )
}

export default Banner