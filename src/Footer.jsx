import './footer.css'
function Footer() {

    return(
        <footer>
            <div className='separator'></div>
            <div className='email-div'>
                <h2 className='email-h2'>Email</h2>
                <p className='email-p'><a href="mailto:iiro.paakkonen@gmail.com">iiro.paakkonen@gmail.com</a></p>
            </div>
            <div className='github-div'>
                <h2 className='github-h2'>Github</h2>
                <p className='github-p'><a href="https://github.com/iiropaakkonen">https://github.com/iiropaakkonen</a></p>
            </div>
            <div className='linkedin-div'>
                <h2 className='linkedin-h2'>LinkedIn</h2>
                <p className='linkedin-p'><a href="https://www.linkedin.com/in/iiropaakkonen/">https://www.linkedin.com/in/iiropaakkonen/</a></p>
            </div>
            <p className='copyright'>&copy; {new Date().getFullYear()} Iiro Pääkkönen</p>

        </footer>
    );
}
export default Footer