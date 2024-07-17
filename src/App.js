import SavedData from './SavedData'
import { useEffect, useState } from 'react'
import Form from './Form'
import './App.css'

function App() {

  useEffect(()=>{
    const preUserData = JSON.parse(localStorage.getItem("user-storage")) ||[]
    setUser(preUserData)
  },[])

  const [user, setUser] = useState([]);

  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    email: ""
  })

  const [update,setUpdate] = useState(false);
  const [index,setIndex] = useState();


  return (
    <div className="App">
      <h1>CRUD APP</h1>
      <Form 
        user={user} 
        setUser={setUser} 
        userDetails={userDetails} 
        setUserDetails={setUserDetails}
        update={update}
        setUpdate={setUpdate}
        index={index}
        setIndex={setIndex}
        />
      <SavedData 
        user={user} 
        setUser={setUser} 
        userDetails={userDetails} 
        setUserDetails={setUserDetails}
        update={update}
        setUpdate={setUpdate}
        index={index}
        setIndex={setIndex}
      />
    </div>
  );
}

export default App;
