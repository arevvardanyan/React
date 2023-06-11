import { useState } from "react";
import { getAge } from "./helpers.js";
// import * as x from "./helpers.js";

const App = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeSurname = (e) => {
    setSurname(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const onSave = () => {
    const newUser = {
      name,
      surname,
      age,
    };

    setUsers([...users, newUser]);

    setName("");
    setSurname("");
    setAge("");
  };

  return (
    <div>
      <input
        style={{ marginRight: 4 }}
        value={name}
        onChange={handleChangeName}
      />
      <input
        style={{ marginRight: 4 }}
        value={surname}
        onChange={handleChangeSurname}
      />
      <input
        style={{ marginRight: 4 }}
        value={age}
        onChange={handleChangeAge}
      />

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