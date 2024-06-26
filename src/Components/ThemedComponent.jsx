import {useTheme} from '../Context/ThemeContext'

const ThemedComponent = () => {
    //where does the toggle come from
    const{theme, toggleTheme} = useTheme();

    return(
        <div style={{background: theme=== 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff'}}>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}> Toggle Theme</button>
        </div>
    )
}

export default ThemedComponent;