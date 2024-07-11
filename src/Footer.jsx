import './footer.css'
function Footer() {

    return(
        <footer>
            <p className='copyright'>&copy; {new Date().getFullYear()} Iiro Pääkkönen</p>
        </footer>
    );
}
export default Footer