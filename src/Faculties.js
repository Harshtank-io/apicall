import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Buses() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://6318eda86b4c78d91b32ac48.mockapi.io/travel/")
      .then((e) => {
        return e.json();
      })
      .then((e) => {
        setdata(e);
      });
  }, []);

  const formatedBuses = data.map((e) => {
    return (
      <>
        <div class="col-3">
          <link
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <Link className="names" to={"../faculty/" + e.id}>
            <img src={e.BusImage} alt="asdf" />
            <h5 class="card-title">{e.BusName}</h5>
            <p class="card-text">Buses Routes</p>
            <a href="#" class="btn btn-primary">
              Load More
            </a>
          </Link>
        </div>
      </>
    );
  });
  return (
    <>
      <div class="container">
        <div class="row">{formatedBuses}</div>
      </div>
    </>
  );
}

export default Buses;
