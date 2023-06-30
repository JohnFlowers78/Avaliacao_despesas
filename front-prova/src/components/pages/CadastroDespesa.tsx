import { useState } from 'react';
import axios from 'axios';
import { Despesa } from '../../models/despesa.model';

function CadastroDespesa() {
  const [ descricao, setDescricao ] = useState("");
  const [ preco, setPreco ] = useState("");

  function enviar() {
    let despesa : Despesa = new Despesa();
    despesa.descricao = descricao;
    despesa.preco = Number.parseInt(preco);

    axios
      .post("http://localhost:3333", despesa)
      .then((resposta) => {
        console.log(resposta.data.mensagem);
        setDescricao("");
        setPreco("");
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  return(
    <div>
      <h1>Cadastrar Desepesa</h1>
      <div>
        <label>Descrição:
          <input type="text" value={descricao} onChange={(event: any) => setDescricao(event.target.value)}></input>
        </label>
      </div>
      <div>
        <label>Preço:
          <input type="text" value={preco} onChange={(event: any) => setPreco(event.target.value)}></input>
        </label>
      </div>
      <div>
        <button onClick={enviar}>Cadastrar</button>
      </div>
    </div>
  )
}

export default CadastroDespesa;
