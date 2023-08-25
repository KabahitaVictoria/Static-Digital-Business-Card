import React from "react";

function About_Me() {
    return (
            <div className="about-me">
                <h3>About</h3>
                <p>
                    Student of Computer Science interested mainly in Website 
                    Development. I love designing and creating beautiful 
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
                    Reading. Learning a new language. Trying my hand at drawing. Music (especially oldies).
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

