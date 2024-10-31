const Button = (props) => {
    return (
        <button style={buttonStyle}>
            {props.text}
        </button>
    )
}

const buttonStyle = {padding: '10px 20px', textAlign: 'center', color:'white', backgroundColor: 'blue'}

export default Button;