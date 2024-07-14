import './header.css'
import React from 'react';

function Header({ onButtonClick }) {

    //händlää napin painalluksen ja lähettää App.jsx
    const handleClick = (message) => {
        onButtonClick(message);
    };
    //THE BUTTONS IN THIS RETURN STATEMENT SEND A NUMBER 1-4 THAT ACTS AS AN ID FOR THE PAGE TO LOAD A BODY
    return(
        <div>
            <nav>
                <ul>
                    <div className="left-side">
                        <li><button className='name-button' onClick={() => handleClick(1)}><h1>Iiro Pääkkönen</h1></button></li>
                        <li><p>MSc Software Engineering Student</p></li>
                    </div>
                    <div className="right-side">
                        <li>
                            <button onClick={() => handleClick(2)}>Resume</button>
                        </li>
                        <li>
                            <button onClick={() => handleClick(3)}>Academics</button>
                        </li>
                        <li>
                            <button onClick={() => handleClick(4)}>Personal</button>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default Header