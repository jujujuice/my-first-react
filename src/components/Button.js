import PropTypes from 'prop-types'

const Button = ({text, onClick}) => {
    return (
        <button className='btn' onClick={onClick} >{text}</button>
    )
}

Button.defaultProps = {
    text: 'View',
}

Button.propTypes = {
    text: PropTypes.string,
}

export default Button
