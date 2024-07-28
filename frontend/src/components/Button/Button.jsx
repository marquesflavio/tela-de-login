import './ButtonStyle.css'
// eslint-disable-next-line react/prop-types
const Button = ({ children, onClick, ...props}) => {

    return (
        <button
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button