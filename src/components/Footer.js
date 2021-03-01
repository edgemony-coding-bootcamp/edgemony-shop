import './Footer.css'
function Footer (props){
    return(
        <footer className="footer">
            <img src={props.logo} alt={props.logo}></img>
        </footer>
    )
}
export default Footer