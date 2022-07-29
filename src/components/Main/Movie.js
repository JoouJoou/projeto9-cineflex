import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Section() {
  const { idMovie } = useParams();
  console.log(idMovie);
  const [hour, setHour] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v7/cineflex/movies/${idMovie}/showtimes`
      )
      .then((response) => {
        setHour(response.data);
      });
  }, []);

  return (
    <>
      <Main>
        <h1>Selecione o horário</h1>
        <section>
          {hour.title &&
            hour.days.map((e) => {
              return (
                <div className="dates" key={e.id}>
                  <p>
                    {e.weekday} - {e.date}
                  </p>
                  <div className="hour">
                    {e.showtimes.map((i) => {
                      return (
                        <Link to={`/sessao/${i.id}`}>
                          <button key={i.id}>{i.name}</button>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </section>
      </Main>
      <Footer>
        <div className="ftimg">
          <img src={hour.posterURL}></img>
        </div>
        <div className="title">
          <h1>{hour.title}</h1>
        </div>
      </Footer>
    </>
  );
}

const Main = styled.main`
  margin: 10rem 0 12rem 0;
  h1 {
    display: flex;
    justify-content: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 2.8rem;
    text-align: center;
    margin-bottom: 3rem;

    color: #293845;
  }
  .dates {
    margin-left: 2.3rem;
  }
  .dates p {
    margin-bottom: 2.2rem;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.3rem;

    color: #293845;
  }
  .hour {
    display: flex;
    gap: 0.8rem;
  }
  .hour button {
    width: 8.3rem;
    height: 4.3rem;
    border: none;
    border-radius: 0.3rem;
    background: #e8833a;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.1rem;
    margin-bottom: 2.3rem;
    color: #ffffff;
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dfe6ed;
  border-top: 1px solid #9eadba;
  position: fixed;
  bottom: 0;
  left: 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 2.6rem;
  box-sizing: initial;

  color: #293845;
  gap: 1.4rem;
  img {
    width: 4.8rem;
    height: 7.2rem;
  }
  .ftimg {
    margin-left: 1rem;
    width: 7rem;
    height: 8.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    background: #ffffff;
  }
  .title {
    max-width: 29rem;
  }
`;
