import styled from "styled-components";
import { useState, useEffect } from "react";

export default function Inputs({ name, cpf, setName, setCpf }) {
  return (
    <>
      <h1>Nome do comprador:</h1>
      <input
        placeholder="Digite seu nome..."
        value={name}
        onChange={({ target }) => {
          setName(target.value);
        }}
        required
      ></input>
      <h1>CPF do comprador:</h1>
      <input
        placeholder="Digite seu CPF..."
        value={cpf}
        onChange={({ target }) => {
          setCpf(target.value);
        }}
        required
      ></input>
    </>
  );
}
