import React from "react";

function About_Me() {
    return (
            <div className="about-me">
                <h3>About</h3>
                <p>
                    I am a student of Computer Science interested mainly in Frontend Website 
                    Development and Graphic Design. I love designing and creating beautiful 
                    layouts, as well as interactive web pages. I am always eager to learn more. 
                </p>
            </div>
    )
}

function Interests() {
    return (
        <div className="interests">
                <h3>Interests</h3>
                <p>
                    Reading. Food. Living healthy. Computers. A bit of art...And more reading :D
                </p>
        </div>
    )
}

export function About() {
    return (
                <div className="about">
                    <About_Me />
                    <Interests />
                </div>
    )
}

