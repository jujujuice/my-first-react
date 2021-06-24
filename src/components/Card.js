
const Card = ({ person, openModal }) => {
    return (
        <div className='card' onClick={() => openModal(person)} > 
            <img src={person.picture.large} alt={person.name.title + ' ' + person.name.first + ' ' + person.name.last} />
            <p>{person.name.title + ' ' + person.name.first + ' ' + person.name.last}</p>
        </div>
    )
}

export default Card
