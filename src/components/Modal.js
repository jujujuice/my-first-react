import { MdCall, MdClose, MdEmail, MdPlace, MdWebAsset } from 'react-icons/md';

const Modal = ({showModal, setShowModal, person}) => {

    return (
        <>
        {showModal ? 
        <div className='modal'>
            <div className='modal-inner'>
                <div className='modal__photo'>
                    <img src={person.picture.large} alt={person.name.title + ' ' + person.name.first + ' ' + person.name.last} />
                </div>
                <div className='modal__text'>
                    <h1>{person.name.title + ' ' + person.name.first + ' ' + person.name.last}, {person.dob.age}</h1>
                    <p><MdEmail/> {person.email}</p>
                    <p><MdCall/> {person.phone}</p>
                    <p><MdWebAsset/>{person.dob.date}</p>
                    <p><MdPlace/> {person.location.street.number} {person.location.street.name}, {person.location.postcode} {person.location.state}, {person.location.country}</p>
                </div>
                <MdClose className='modal__close' style={{ cursor: 'pointer' }} aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
            </div>
        </div> 
            
        : null}
        </>
    )
}

export default Modal
