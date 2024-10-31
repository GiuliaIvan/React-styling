import { useState } from "react";

function ThemeSwitcher () {
    const [isDarkTheme, setDarkTheme] = useState(false);
    const [isImageVisible, setImageVisible] = useState(false);

    const containerStyle ={
        backgroundColor: isDarkTheme ? '#333' : '#fff',
        color: isDarkTheme ? '#fff' : '#333',
        padding: '50px',
        textAlign: 'center',
        borderRadius: '10px',
    };

    const buttonStyle = {
        backgroundColor: isDarkTheme ? '#fff' : '#333',
        color: isDarkTheme ? '#333' : '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
    }

    const toggleTheme = () => {
        setDarkTheme(!isDarkTheme);
        setImageVisible(!isImageVisible);
    };

    return (
        <div style={containerStyle}>
            <h1>{isDarkTheme ? 'Dark Theme' : 'Light Theme'}</h1>
            <button onClick={toggleTheme} style={buttonStyle}>
                Switch to {isDarkTheme ? 'Light' : 'Dark'}
            </button>

            {isImageVisible && (
                <img
                    src="src/images/profile.jpg"
                    alt="Random Image"
                    style={{ width: '200px', height: '300px', borderRadius: '10px', marginLeft: '20px' }}
                />
            )}
        </div>
    );
}

export default ThemeSwitcher;