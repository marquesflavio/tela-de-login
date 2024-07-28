// eslint-disable-next-line react/prop-types
const Input = ({ type, name, placeholder, value, onChange, ...props }) => {

    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...props}
        />
    )
}

export default Input