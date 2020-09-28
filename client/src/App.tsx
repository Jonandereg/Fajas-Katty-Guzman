import React, { useState, useEffect } from 'react';
import { getUsers,getUser} from './services/apiServices';
import './styles/App.css';
import AppRoutes from './routes/router';
import User from './types/user'

interface setUserContext {
  findActiveUser?: (user:User)=>Promise<User>  
}
interface UserContext {
  activeUser?:User
}
export const setUserContext = React.createContext<setUserContext>({})
export const UserContext = React.createContext<UserContext>({})
function App() {
  const [users, setUsers] = useState([0]);
  const [activeUser,setActiveUser] = useState({email:'',password:''})

  useEffect(() => {
    getUsers().then((res) => setUsers(res));      
  }, []);

  const findActiveUser =  (user:User):Promise<User> =>{
    
     return getUser(user).then((res)=>{
       setActiveUser(res)
       return res
      })
  }
 
  return (
    <div className='App'>
      <setUserContext.Provider value={{findActiveUser}}>  
       <UserContext.Provider value= {{activeUser}}> 
         <AppRoutes/> 
      </UserContext.Provider>  
      </setUserContext.Provider>
         
    </div>
  );
}

export default App;
