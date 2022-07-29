import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    console.log(hour);
  }, [hour]);

  console.log(hour);
  return (
    <>
      <main>
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
      </main>
      <footer>
        <img src={hour.posterURL}></img>
        <h1>{hour.title}</h1>
      </footer>
    </>
  );
}
