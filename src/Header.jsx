import './header.css'
import React from 'react';

function Header({ onButtonClick }) {

    //händlää napin painalluksen ja lähettää App.jsx
    const handleClick = (message) => {
        onButtonClick(message);
    };

    return(
        <div>
            <nav>
                <ul>
                    <div className="left-side">
                        <li><a href="#home"><h1>Iiro Pääkkönen</h1></a></li>
                        <li><p>MSc Software Engineering Student</p></li>
                    </div>
                    <div className="right-side">
                        <li>
                            <button onClick={() => handleClick("Body")}>Resume</button>
                        </li>
                        <li>
                            <button onClick={() => handleClick("academics")}>Academics</button>
                        </li>
                        <li>
                            <button onClick={() => handleClick("personal")}>Personal</button>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default Header