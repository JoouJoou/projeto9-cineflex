import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Seats from "./Seats";
import styled from "styled-components";
import Inputs from "./Inputs";

function postSeats(list, name, cpf, day, hour, movie, navigate) {
  axios
    .post(`https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many`, {
      ids: list,
      name,
      cpf,
    })
    .then(() => {
      navigate("/sucesso", { state: { list, name, cpf, day, hour, movie } });
    });
}

export default function Section() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();
  const { idSection } = useParams();
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [seat, setSeat] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSection}/seats`
      )
      .then((response) => {
        setSeat(response.data);
      });
  }, []);

  return (
    <>
      <Container>
        <h1>Selecione o(s) assento(s)</h1>
        <Seats seats={seat.seats} setSelectedSeats={setSelectedSeats} />
        <div className="subtitle">
          <div>
            <button className="select"></button>
            <p>Selecionado</p>
          </div>
          <div>
            <button className="available"></button>
            <p>Disponível</p>
          </div>
          <div>
            <button className="unavailable"></button>
            <p>Indisponível</p>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postSeats(
              selectedSeats,
              name,
              cpf,
              seat.day?.weekday,
              seat?.name,
              seat.movie?.title,
              navigate
            );
          }}
        >
          <div>
            <Inputs name={name} setName={setName} cpf={cpf} setCpf={setCpf} />
          </div>
          <button type="submit">Reservar assento(s)</button>
        </form>
      </Container>
      <Footer>
        <div className="ftimg">
          <img src={seat.movie?.posterURL}></img>
        </div>
        <div>
          <h1>{seat.movie?.title}</h1>
          <h1>
            {seat.day?.weekday} - {seat?.name}
          </h1>
        </div>
      </Footer>
    </>
  );
}

const Footer = styled.footer`
  width: 100%;
  height: 11.7rem;
  display: flex;
  background: #dfe6ed;
  border-top: 1px solid #9eadba;
  position: fixed;
  bottom: 0;
  left: 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 30px;
  display: flex;
  align-items: center;

  color: #293845;
  gap: 1.4rem;
  img {
    width: 4.8rem;
    height: 7.2rem;
  }
  .ftimg {
    margin-left: 1rem;
    width: 6.4rem;
    height: 8.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    background: #ffffff;
  }
`;

const Container = styled.main`
  margin: 0 auto;
  max-width: 32.7rem;
  margin-top: 8.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
  }
  .false {
    background: #fbe192;
    border: 0.1rem solid #f7c52b;
    border-radius: 12px;
  }
  .subtitle {
    display: flex;
    gap: 7.5rem;
    margin-top: 2rem;
  }
  .subtitle > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
  }
  .select {
    width: 2.6rem;
    height: 2.6rem;

    background: #8dd7cf;
    border: 0.1rem solid #1aae9e;
    border-radius: 1.7rem;
  }
  .available {
    width: 2.6rem;
    height: 2.6rem;

    background: #c3cfd9;
    border: 0.1rem solid #7b8b99;
    border-radius: 1.7rem;
  }
  .unavailable {
    width: 2.6rem;
    height: 2.6rem;

    background: #fbe192;
    border: 0.1rem solid #f7c52b;
    border-radius: 1.7rem;
  }

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 2.8rem;
    color: #293845;
    margin-bottom: 2.5rem;
  }
  form {
    margin-bottom: 15rem;
    margin-top: 4rem;
    height: 25.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  form input {
    width: 32.7rem;
    height: 5.1rem;

    background: #ffffff;
    border: 0.1rem solid #d5d5d5;
    border-radius: 0.3rem;
  }
  form input::placeholder {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2rem;
    color: #afafaf;
  }
  form button {
    width: 22.5rem;
    height: 5rem;
    background: #e8833a;
    border-radius: 3px;
    border: none;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2rem;
    margin-top: 5.7rem;
    color: #ffffff;
    cursor: pointer;
  }
  form h1 {
    margin: 0 0 0.7rem 0;
  }
`;
