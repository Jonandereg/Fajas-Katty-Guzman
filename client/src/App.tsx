import React ,{useState,useEffect} from 'react';
import { getUsers } from './services/apiServices'
import './styles/App.css';
import Homepage from './pages/home/home';


function App() {

  const [users,setUsers] = useState([0])

useEffect(() => {
  getUsers().then((res) => setUsers(res));
}, []);

  return (
    <div className="App">
      <Homepage/>
    </div>
  );
}

export default App;
