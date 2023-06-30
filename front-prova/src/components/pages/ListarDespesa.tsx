import { useState, useEffect } from 'react';
import axios from 'axios';

function ListarDespesa() {
  const [ despesas, setDespesas ] = useState([]);

  function CarregarDados() {
    axios
      .get("http://localhost:3333")
      .then((resposta) => {
        setDespesas(resposta.data.dados);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  useEffect(() => {
    CarregarDados();
  }, []);

  function remover(id: number) {
    axios
      .delete("http://localhost:3333/" + id)
      .then((resposta) => {
        CarregarDados();
      })
      .catch((erro) => {
        console.log(erro);
      })
  }

  return(
    <div>
      <h1>Lista de Despesas</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Despesa</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {despesas.map((despesa: any) => (
             <tr>
              <td>{despesa.id}</td>
              <td>{despesa.descricao}</td>
              <td>{despesa.preco}</td>
              <td>
                <button onClick={() => remover(despesa.id)}>Remover</button>
              </td>
             </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListarDespesa;