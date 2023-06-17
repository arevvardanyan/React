import { useState } from "react";
import { getAge } from "./helpers.js";
// import * as x from "./helpers.js";

const App = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);
  const [errorName, setErrorName] = useState("");
  const [errorSurname, setErrorSurname] = useState("");
  const [errorAge, setErrorAge] = useState("");


  let count = 0;
  const handleChangeName = (e) => {
    setName(e.target.value);
    if(name.length<3){
      setErrorName("Name must be more than 3")
      count++
    }else{
      setErrorName("")
    }
    
  };


  const handleChangeSurname = (e) => {
    setSurname(e.target.value);
     if(surname.length<5){
      setErrorSurname("Surname must be more than 5")
      count++

    }else{
      setErrorSurname("")

    }
    
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
    if(age.value>18 && age.value<80){
      setErrorAge("")
      

    }else{
      setErrorAge("Age is lower 18 or higher 80")
      count++
    }
    
  };
  

  const onSave = () => {
    const newUser = {
      name,
      surname,
      age,
    };
    
   
    
    if(count===0){
      setUsers([...users, newUser]);
    }
    

    setName("");
    setSurname("");
    setAge("");
  };

  return (
    <div style={{textAlign:"center"}}>
      <input
        style={{ marginRight: 4,width:"250px",marginTop:"25px" }}
        value={name}
        onChange={handleChangeName}
      /><br></br>
      
      <label style={{color:"red"}}>{errorName}</label><br></br>
      <input
        style={{ marginRight: 4,width:"250px" }}
        value={surname}
        onChange={handleChangeSurname}
      /><br></br>
      <label style={{color:"red"}}>{errorSurname}</label><br></br>

      <input
        style={{ marginRight: 4,width:"250px" }}
        value={age}
        onChange={handleChangeAge}
      /><br></br>
      <label style={{color:"red"}}>{errorAge}</label><br></br>


      <button onClick={onSave}>Save</button>

      <br />
    
        <table border={1}>
        {users.map((user) => {
         return(<thead><tr>
         <td>{user.name}</td>
         <td>{user.surname}</td>
         <td>{getAge(user.age)}</td>
       </tr></thead>)
      })}
      </table>

      
      
    </div>
  );
};

export default App;