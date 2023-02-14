import './EmailInput.css'

export function EmailInput({onchange1, onchange2, funcao, emailVali}){
    buscaInput = e => {
      if(e.keyCode === 13){
        const valor = e.target.value
        console.log(valor)
      }
    }
    return(
        <div>
            <input onChange={(onchange1) && (onchange2)} className={emailVali} onKeyDown={(e) => this.buscaInput(e)}/>
            <button onClick={funcao}>AAAAAAA</button>
        </div>
    )
}