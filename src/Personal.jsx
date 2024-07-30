import React, {useEffect, useState} from 'react';
import iroh from "./assets/iroh.png"

function Personal () {

    const [backendData, setBackendData] = useState([{}]);


    //this useEffect fetches data from the server localhost:5000/api
    useEffect(() => {
        fetch('/api').then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, []);

    const paragraphs = [
        {
            text: "this is the first paragraph", pic: iroh, id: 0
        },
        {
            text: "this is the second paragraph", pic: null, id: 1
        },
        {
            text: "this is the third paragraph", id: 2
        },
        {
            //this part displays data from the server
            //NEEDS TO BE MAPPED
            text: backendData.text, id:3
        },
    ];
    return(
        <>
        <h2>Here is some personal stuff of mine</h2>
        {paragraphs.map(function(paragraph) {
            return (
                <div key={paragraph.id}>
                    <p>{paragraph.text}</p>
                    <img src={paragraph.pic}></img>
                </div>
            )
        })}
        </>
    );
};

export default Personal