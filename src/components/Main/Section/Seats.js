import Seat from "./Seat";
import styled from "styled-components";

export default function Seats({ seats, setSelectedSeats }) {
  return (
    <Section>
      {seats &&
        seats.map((e) => {
          return (
            <Seat
              cl={e.isAvailable}
              key={e.id}
              name={e.name}
              id={e.id}
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
