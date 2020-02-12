import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

const userTogglerStyle = {
  cursor: "pointer" 
}

const UserToggler = () => {
  const [userLogged, setUserLogged] = useContext(UserContext)
  
  return (
    <div style={userTogglerStyle} onClick={() => setUserLogged(userLogged === "Shu" ? "Fanty" : "Shu")}>
      {`${userLogged === "Fanty" ? "Username" : "User"}`}: {userLogged}
    </div>
  )
}

export default UserToggler