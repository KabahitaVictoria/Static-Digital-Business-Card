import React from "react";

function Avatar() {
    return (
        <div className="avatar">
            <img src="/profile2.png" />
        </div>
    )
}

function Details() {
    return (
        <div className="details">
            <h2 className="name">Victoria Kabahita</h2>
            <h3 className="profession thin">Frontend Web Developer</h3>
            <p className="website thin">victoriakabahita.website</p>
        </div>
    )
}

function Social() {
    return (
        <div className="social-buttons">
            <button className="email"><a href="mailto: torimalvie@gmail.com"><img src="/icons8-mail-50.png"/><span>Email</span></a></button>
            <button className="linkedin"><a href="https://www.linkedin.com/in/kabahita-victoria-10b36921b/"><img src="/icons8-linkedin-24.png"/><span>LinkedIn</span></a></button>
        </div>
    )
}

export function Info() {
    return (
        <div className="info">
            <Avatar />
            <Details />
            <Social />
        </div>
    )
}