import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Sucess() {
  const { state } = useLocation();
  return (
    <Main>
      <div className="title">
        <h1>Pedido feito com sucesso!</h1>
      </div>
      <div className="topics">
        <div className="topic">
          <h2>Filme e sessão</h2>
          <p>{state.movie}</p>
          <p>
            {state.day} {state.hour}
          </p>
        </div>

        <div className="topic">
          <h2>Ingressos</h2>
          {state.selectedSeatName.map((e, i) => {
            return <p key={i}>Assento {e}</p>;
          })}
        </div>
        <div className="topic">
          <h2>Comprador</h2>
          <p>Nome: {state.name}</p>
          <p>CPF: {state.cpf}</p>
        </div>
      </div>
      <Link to="/" className="btn">
        <button>Voltar para Home</button>
      </Link>
    </Main>
  );
}

const Main = styled.main`
  margin-top: 9rem;

  h1 {
    width: 15rem;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.8rem;
    display: flex;
    text-align: center;

    color: #247a6b;
  }
  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
  }
  .topic {
    margin-bottom: 5rem;
    margin-left: 2.9rem;
  }
  .topic h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;
    margin-bottom: 1rem;

    color: #293845;
  }

  .topic p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 2.2rem;
    line-height: 2.6rem;
    margin-bottom: 0.5rem;
    color: #293845;
  }
  .btn {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
  }
  button {
    width: 225px;
    height: 42px;

    background: #e8833a;
    border-radius: 0.3rem;
    border: none;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    color: #ffffff;
  }
  a {
    text-decoration: none;
  }
`;
