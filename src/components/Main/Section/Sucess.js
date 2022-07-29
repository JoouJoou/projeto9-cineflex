import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function Sucess() {
  const { state } = useLocation();
  console.log(state);
  return (
    <Main>
      <h1>Pedido feito com sucesso!</h1>
      <div>
        <h2>Filme e sessão</h2>
        <p>{state.movie}</p>
        <p>
          {state.day} {state.hour}
        </p>
      </div>

      <div>
        <h2>Ingressos</h2>
        {state.list.map((e, i) => {
          return (
            <div key={i}>
              <p>Assento {e}</p>
            </div>
          );
        })}
      </div>
      <div>
        <h2>Comprador</h2>
        <p>Nome: {state.name}</p>
        <p>CPF: {state.cpf}</p>
      </div>
      <button>Voltar para Home</button>
    </Main>
  );
}

const Main = styled.main`
  margin-top: 9rem;
`;
