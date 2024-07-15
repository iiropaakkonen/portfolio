import React from 'react';
import resume from "./assets/CV2023_eng.pdf"
import "./resume.css";

function Resume() {

    const hereResume = "Here you can read and download my resume with my job experience and different skills.";
    return(
        <>
        <p className='resume-p'>{hereResume}</p>
        <object
            type="application/pdf"
            data={resume}
            width="1000"
            height="900"
        ></object>
        </>
    );
}

export default Resume