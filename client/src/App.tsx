import React, { useState, useEffect } from 'react';
import { getUsers } from './services/apiServices';
import './styles/App.css';
import AppRoutes from './routes/router';

function App() {
  const [users, setUsers] = useState([0]);

  useEffect(() => {
    getUsers().then((res) => setUsers(res));
  }, []);

  return (
    <div className='App'>
      <AppRoutes/>      
    </div>
  );
}

export default App;
