import { useState } from "react";
import { getAge } from "./helpers.js";
// import * as x from "./helpers.js";

const App = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);
  const [errorName, setErrorName] = useState(false);
  const [errorSurname, setErrorSurname] = useState(false);
  const [errorAge, setErrorAge] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };


  const handleChangeSurname = (e) => {
    setSurname(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };
  let count = 0;
  const onSave = () => {
    const newUser = {
      name,
      surname,
      age,
    };
    if(name.length<=3){
      setErrorName(true)
      count++
    }else{
      setErrorName(false)

    }
    if(surname.length<=5){
      setErrorSurname(true)
      count++

    }else{
      setErrorSurname(false)

    }
    if(age<18 || age>80){
      setErrorAge(true)
      count++

    }else{
      setErrorAge(false)

    }
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
      {errorName?
      <label style={{color:"red"}}>Name must be more then 3</label>:""}<br></br>
      <input
        style={{ marginRight: 4,width:"250px" }}
        value={surname}
        onChange={handleChangeSurname}
      /><br></br>
      {errorSurname?
      <label style={{color:"red"}}>Surname must be more then 5</label>:""}<br></br>

      <input
        style={{ marginRight: 4,width:"250px" }}
        value={age}
        onChange={handleChangeAge}
      /><br></br>
      {errorAge?
      <label style={{color:"red"}}>Age must be more then 3</label>:""}<br></br>


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