import React, {useEffect, useState} from 'react';
import './personal.css'
import iroh from "./assets/iroh.png"

function Personal () {

    const [backendData, setBackendData] = useState([{}]);


    //this useEffect fetches data from the server localhost:5000/api
    useEffect(() => {
        fetch('/getData').then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, []);

    return(
        <>
        <h2 className='personalH2'>Personal things about me</h2>
        <div className='separator-personal'>
        {backendData.map(function(data) {
            return (
                <div className='paraDiv' key={data.id}>
                    <p className='personalPara'>{data.text}</p>
                </div>
            )
        })}
        </div>
        </>
    );
};

export default Personal