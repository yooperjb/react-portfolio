import React from 'react';

const Nav = () => {
    const menuSelected = (name) => {
        console.log(`${name} clicked`);
    }
    return (
        <header>
            <div>
            <h1>
                Jason Barnes
            </h1>
            </div>
            <div>
            <nav>
                <ul className="nav-list">
                    <li onClick={() => menuSelected("About")}>
                        About
                    </li>
                    <li onClick={() => menuSelected("Portfolio")}>
                        Portfolio
                    </li>
                    <li onClick={() => menuSelected("Contact")}>
                        Contact
                    </li>
                    <li onClick={() => menuSelected("Resume")}>
                        Resume
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    )
};

export default Nav;