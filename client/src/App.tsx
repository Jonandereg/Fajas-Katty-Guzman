import React ,{useState,useEffect} from 'react';
import { getUsers } from './services/apiServices'
import Testing from './components/test'
import './styles/App.css';


function App() {

  const [users,setUsers] = useState([0])

useEffect(() => {
  getUsers().then((res) => setUsers(res));
}, []);

  return (
    <div className="App">
      <Testing  myusers={users} />
    </div>
  );
}

export default App;
