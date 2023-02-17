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
            <button className="email"><img src="/icons8-mail-50.png"/>Email</button>
            <button className="linkedin">LinkedIn</button>
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