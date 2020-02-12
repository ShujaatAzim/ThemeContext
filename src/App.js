import React, { useState } from 'react'
import ThemeContext from './Context/ThemeContext'
import Header from './Components/Header'
import Main from './Components/Main'
import UserContext from './Context/UserContext'
import AppTheme from './Data/Colors'
import AppUsers from './Data/Users'


function App() {
  const themeHook = useState(Object.keys(AppTheme)[0])
  const userHook = useState(Object.keys(AppUsers)[0])
  console.log(userHook)
  return (
    <ThemeContext.Provider value={themeHook}>
      <UserContext.Provider value={userHook}>
        <div>
          <Header />
          <Main />
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
