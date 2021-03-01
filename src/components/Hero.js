import PropTypes from 'prop-types'
import './Hero.css'

function Hero ({image,title,description}){
    return (
        <div className="Hero">
            <h1>{title}</h1>
            <img src={image}/>
            <p>{description}</p>
        </div>
    )
}

Hero.propTypes={
    title:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired
 }
export default Hero;
