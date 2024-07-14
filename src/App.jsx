import React, { useState } from 'react';
import Header from "./Header.jsx"
import Body from "./Body.jsx"
import Footer from "./Footer.jsx";

// MUISTA AINA LISÄTÄ EXPORT DEFAULT *FUNKTIO*, TAI SIVU KUSEE

function App() {

  const [rendered, setRendered] = useState("");
  var buttonClicked = ""; //ehkä turha

  //händlää headerissa tapahtuvan napin painalluksen
  const handleHeaderClick = (message) => {
    setRendered(message);
    console.log(message);
  };
  //Tämä määrittelee, mikä "body" renderataan. Defaulttina etusivu,
  //nappeja painettaessa resume, academics, personal tai nimeä painettaessa
  //jälleen etusivu.
  function Render(props) {
    var renderedContainer = props.renderedContainer;

    //toimii atm stringeillä mutta parempi ehkä id tms.
    //if(renderedContainer == "home") {
    //  return <Body/>;
    //} else {
    //  return null;
    //}

    switch (renderedContainer) {
      case 1: //tähän home
        return <Body/>;
      case 2:
        return null; //tähän resume
      case 3:
        return null; //tähän academics
      case 4:
        return null; //tähän personal
    }
  }


  return (
    <>
    <Header onButtonClick={handleHeaderClick} />
    <Render renderedContainer={rendered}/>
    <Footer/>
    </>
  );
}

export default App
