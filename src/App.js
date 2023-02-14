import './App.css';
import { EmailInput } from './components/EmailInput';
import { useState } from 'react';

function App() {
  const [Email, setEmail] = useState('')
  const [textoInpt, setTextInpt] = useState('')
  function handleSubmit(){
      //logica do envio 
      console.log(textoInpt)
  }
  return (
    <div className="App">
      <EmailInput onchange1={(e) => setTextInpt(e.target.value)} onchange2={(e) => setEmail(e.target.value)} funcao={handleSubmit} emailVali={Email === "" ? "vazio" : ""}/>
    </div>
  );
}

export default App;
