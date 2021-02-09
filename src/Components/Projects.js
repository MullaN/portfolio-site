import React from 'react'

const Projects = () => {
    return(
        <div className='content'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dX1lKnwXzZk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h1>Fore the Record</h1>
            <h2><a href="https://fore-the-record.web.app/">Click here to try!</a></h2>
            <p>Fore the Record was my final project at the end of my Flatiron School bootcamp. This app was designed as a place to track scores for the 
                Golf with Your Friends computer game and also calculate your handicap. This React app utilizes Semantic UI for styling, React Router for client-side
                routing, and OpenID 2.0 to allow for logging in through Steam. The data is stored in a Ruby on Rails api backend.
            </p>
        </div>
    )
}

export default Projects