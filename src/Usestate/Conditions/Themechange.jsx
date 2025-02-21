
import { useState } from "react";
import './Themechange.css'

function Themechanger(){
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    //   alert(`Switched to ${theme === 'light' ? 'Dark' : 'Light'} Theme!`);
    };
  
    return (
      <div className={`theme-toggle ${theme}`}>
        <h2>Today's Task</h2>
        <p>Current Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)} Mode</p>
        <button className="actionButton" onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>
    )
}

export default Themechanger