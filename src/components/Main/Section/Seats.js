import Seat from "./Seat";
import styled from "styled-components";
import { useState, useEffect } from "react";

export default function Seats({ seats, setSelectedSeats }) {
  return (
    <Section>
      {seats &&
        seats.map((e) => {
          return (
            <Seat
              key={e.id}
              cl={e.isAvailable}
              name={e.name}
              setSelectedSeats={setSelectedSeats}
            />
          );
        })}
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
`;
