const Button = (props) => {
    return (
        <button style={{padding: '10px 20px', textAlign: 'center', color:'white', backgroundColor: 'blue'}}>
            {props.text}
        </button>
    )
}

export default Button;