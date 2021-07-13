import './App.css';
import Submit from "./components/Submit"
import Display from "./components/Display"
import React, {useState} from 'react';

function App() {
  const [items, setItems] = useState([]);
  const[add, setAdd] = useState({task:"", isCompleted:false});
  
  return (
    <div className="App">
      <Submit items={items} setItems={setItems} add={add} setAdd={setAdd} />
      <Display items={items} setItems={setItems} />
    </div>
  );
}

export default App;
