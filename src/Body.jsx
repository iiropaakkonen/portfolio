import "./body.css"
import iroh from "./assets/iroh.png"

function Body() {

    const paragraph = "I am a Bachelor of Science studying my Master's degree in Information Technology and Software Engineering at the University of Turku. My main interests are software development, web design and programming practices. On my spare time I go cycling, running and swimming. Video games also have a place in my heart.";

    return(
        <>
        <img alt="Picture of Iiro Pääkkönen" 
        src={iroh} className="iroh"></img>
        <h1 className="name">Iiro Pääkkönen</h1>
        <p className="about-me">About me</p>
        <p className="paragraph">{paragraph}</p>
        </>
    );
}
export default Body