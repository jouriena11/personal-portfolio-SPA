import React from 'react'

export default function Banner() {
    return (
        <section className="container-fluid banner-container">
            <div className="row">
                {/* TODO: to apply image css for mobile */}
                <img
                    className="main-banner-img"
                    src="/img/full-stack-portfolio-banner_1920px.png"
                />
            </div>
        </section>
    )
}
