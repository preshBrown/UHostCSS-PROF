import React from 'react';
import "./Package.css";

const Package = (props) => {
  return (
    <>
    <div class="background"></div>
    <div id="package-name"> 
       <section className ="package" id="plus">
            <a href="/">
                <h1 className ="package__title">Our PLUS Plan</h1>
                <h2 className ="package__badge">RECOMMENDED</h2>
                <h2 className ="package__subtitle">The most popular choice of our customers.</h2>
                <p className ="package__info">Benefit from increased storage and faster support to ensure that your mission-critical data and applications
                    are always available!</p>
            </a>
        </section>
   <section className ="modified__sec">
        <section className ="package" id="free">
            <a href="/">
                <h1 className ="package__title">Our FREE Plan</h1>
                <h2 className ="package__subtitle">An extremely solid start into our hosting world.</h2>
                <p className ="package__info">Get started immediately at zero cost!</p>
            </a>
        </section>
    </section>
       
        <section className ="package" id="premium">
            <a href="/">
                <h1 className ="package__title">Our PREMIUM Plan</h1>
                <h2 className ="package__subtitle">All your enterprise needs. Instant support, guaranteed uptime. </h2>
                <p className ="package__info">The best solution for small to large enterprises. Because hosting shouldn't be in the way!</p>
            </a>
        </section>
    </div>
    </>
  )
}

export default Package;