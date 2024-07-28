import './ButtonStyle.css'
// eslint-disable-next-line react/prop-types
const Button = ({ children, onClick }) => {

    return (
        <button
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button