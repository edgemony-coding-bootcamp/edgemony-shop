import './Footer.css'
function Footer (props){
    return(
        <footer className="footer">
            <img src={props.logo} alt={props.logo}></img>
            <span>{props.year} © {props.company}</span>
        </footer>
    )
}
export default Footer