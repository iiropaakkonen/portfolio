import React, {useEffect, useState} from 'react';
import iroh from "./assets/iroh.png"

function Personal () {

    const [backendData, setBackendData] = useState([{}]);
    const [error, setError] = useState([{}]);

    useEffect(() => {
        fetch('/api')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => setData(data))
          .catch(error => setError(error.message));
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