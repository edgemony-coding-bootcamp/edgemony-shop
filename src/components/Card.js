import './Card.sass';

function Card({ image, category, title, price }) {
  return (
    <article className="Card">
      <img src={ image } alt={ category }/>
      <h3>{ title }</h3>
      <h5>{ price }</h5>
      <button>View Details</button>
    </article>
  )
}

export default Card;