import './header.css'

function Header() {

    return(
        <div>
            <nav>
                <ul>
                    <div className="left-side">
                        <li><a href="#home"><h1>Iiro Pääkkönen</h1></a></li>
                        <li><p>MSc Software Engineering Student</p></li>
                    </div>
                    <div className="right-side">
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#academics">Academics</a></li>
                        <li><a href="#personal">Personal</a></li>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default Header