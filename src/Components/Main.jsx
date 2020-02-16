import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import UserContext from '../Context/UserContext'
import AppTheme from '../Data/Colors'

const Main = () => {
  const theme = useContext(ThemeContext)[0];
  const user = useContext(UserContext)
  const currentTheme = AppTheme[theme];
  return(
      <main style = {{
          padding: "1rem",
          backgroundColor: `${currentTheme.backgroundColor}`,
          color: `${currentTheme.textColor}`,
      
      }}>
          <h1>{user}</h1>
          <p>This is a paragraph</p>
          <button> This is a button</button>
      </main>
  );
}

export default Main;
