import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Start({ movies }) {
  return (
    <Main>
      <h1>Selecione o filme</h1>
      <ul>
        {movies.map((e) => {
          return (
            <li key={e.id}>
              <Link to={`/filme/${e.id}`}>
                <img src={e.posterURL}></img>
              </Link>
            </li>
          );
        })}
      </ul>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 2.8rem;
    color: #293845;
    margin: 2.7rem 0 2.7rem 0;
  }

  img {
    width: 12.9rem;
    height: 19.3rem;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
  }
  li {
    width: 14.5rem;
    height: 20.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.3rem;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  }
`;
