import React, { useState, useEffect } from 'react';
import { getUsers, getUser } from './services/apiServices';
import './styles/App.css';
import AppRoutes from './routes/router';
import User from './types/user';

interface setUserContext {
  findActiveUser?: (user: User) => Promise<User>;
}

interface adminContext {
  users?: User[];
}

const initialState: User = { email: '', password: '' };
export const adminContext = React.createContext<adminContext>({});
export const setUserContext = React.createContext<setUserContext>({});
export const UserContext = React.createContext<any>(initialState);
function App() {
  const [users, setUsers] = useState([initialState]);
  const [activeUser, setActiveUser] = useState(initialState);

  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = (): Promise<[User]> => {
    return getUsers().then((res) => {
      setUsers(res);
      return res;
    });
  };
  const findActiveUser = (user: User): Promise<User> => {
    return getUser(user).then((res) => {
      setActiveUser(res);
      return res;
    });
  };

  return (
    <div className='App'>
      <adminContext.Provider value={{ users }}>
        <setUserContext.Provider value={{ findActiveUser }}>
          <UserContext.Provider value={{ activeUser }}>
            <AppRoutes />
          </UserContext.Provider>
        </setUserContext.Provider>
      </adminContext.Provider>
    </div>
  );
}

export default App;
