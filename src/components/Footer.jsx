const d = new Date();
const year = d.getFullYear();
function Footer(){
    return <footer>
        <p>&copy; {year}</p>
    </footer>
}
export default Footer;