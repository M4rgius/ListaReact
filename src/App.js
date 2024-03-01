
import './App.css';
import data from "./data";
import List from "./List"
import {useState} from 'react';


function App() {
  const[people, setPeople]=useState(data)
  const reloadAll=()=>{
    setPeople(data)
  }

  const removeItem = (id) => {
    setPeople((oldValue) => oldValue.filter((value) => value.id !== id));
  };

  return (
    <div>
<h1>Appuntamento per problemi</h1>
      <List data={people} removeItem={removeItem}/>
<button className="card__btn" onClick={reloadAll}>Ricarica appuntamenti</button>
<button className="card__btn_del" onClick={()=>setPeople([])}>Elimina tutto</button>

    </div>
  );
}

export default App;
