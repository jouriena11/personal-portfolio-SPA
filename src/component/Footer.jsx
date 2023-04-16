import React from 'react'

export default function Footer() {
    return (
        <footer className="d-flex align-items-center justify-content-center my-4 py-2">
            <a href="https://github.com/jouriena11" target="_blank">
                <img
                    height="32px"
                    className="mx-3"
                    src="/img/icon-github.png"
                    alt="github-icon-with-embedded-link-to-jouriena11-page"
                />
            </a>
            <a href="https://www.linkedin.com/in/piyawit-teeraprasert/" target="_blank">
                <img
                    height="32px"
                    className="mx-3"
                    src="/img/icon-linkedin.png"
                    alt="linkedin-icon-with-embedded-link-to-the-author-linkedin-page"
                />
            </a>
            <a href="https://stackoverflow.com/users/21631102/jouriena11" target="_blank">
                <img
                    height="32px"
                    className="mx-3"
                    src="/img/icon-stackoverflow.png"
                    alt="stackoverflow-icon-with-embedded-link-to-the-author-stackoverflow-page"
                />
            </a>
            <a href="https://twitter.com/jouriena11" target="_blank">
                <img
                    height="32px"
                    className="mx-3"
                    src="/img/icon-twitter.png"
                    alt="twitter-icon-with-embedded-link-to-the-author-twitter-account"
                />
            </a>
        </footer>
    )
}
