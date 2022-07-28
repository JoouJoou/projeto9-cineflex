import styled from "styled-components";

export default function Top() {
  return (
    <Header>
      <h1>CINEFLEX</h1>
    </Header>
  );
}

const Header = styled.header`
  width: 100%;
  height: 6.7rem;
  background-color: #c3cfd9;
  font-size: 3.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e8833a;
  font-weight: 400;
`;
