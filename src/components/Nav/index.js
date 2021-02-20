import React from 'react';

const Nav = () => {
    const menuSelected = () => {
        console.log("hello");
    }
    return (
        <header>
            <h1>
                Jason Barnes
            </h1>
            <nav>
                <ul>
                    <li onClick={menuSelected}>
                        About
                    </li>
                    <li onClick={menuSelected}>
                        Portfolio
                    </li>
                    <li onClick={menuSelected}>
                        Contact
                    </li>
                    <li onClick={menuSelected}>
                        Resume
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Nav;