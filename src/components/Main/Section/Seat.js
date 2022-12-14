import styled from "styled-components";
import { useState, useEffect } from "react";

export default function Seat({
  cl,
  name,
  setSelectedSeats,
  id,
  selectedSeatName,
}) {
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    if (!selected) {
      setSelectedSeats((a) => {
        return a.filter((e) => e !== Number(id));
      });
      selectedSeatName((b) => {
        return b.filter((c) => c !== Number(name));
      });
    } else {
      setSelectedSeats((e) => [...e, Number(id)]);
      selectedSeatName((a) => [...a, Number(name)]);
    }
  }, [selected]);
  return (
    <Button
      className={`${cl} seat`}
      onClick={() => {
        setSelected(!selected);
      }}
      selected={selected}
      disabled={!cl}
    >
      {name}
    </Button>
  );
}

const Button = styled.button`
  background: ${({ selected }) => (selected ? "#8DD7CF" : "#C3CFD9")};
  border: 1px solid ${({ selected }) => (selected ? "#45BDB0" : "#808F9D")};
`;
