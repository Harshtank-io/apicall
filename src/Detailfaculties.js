import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detailfaculties() {
  let params = useParams();

  const [faculty, setFaculty] = useState({});

  useEffect(() => {
    fetch("https://6318eda86b4c78d91b32ac48.mockapi.io/travel/" + params.id)
      .then((e) => {
        return e.json();
      })
      .then((e) => {
        setFaculty(e);
      });
  }, []);

  return (
    <>
      <table>
        <tr>
          <td>BusImage</td>
          <td>
            <img src={faculty.BusImage} alt="asdf" />
          </td>
        </tr>
        <tr>
          <td>Id</td>
          <td>{params.id}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{faculty.BusName}</td>
        </tr>

        <tr>
          <td>Bus Driver</td>
          <td>{faculty.BusDriver}</td>
        </tr>
        <tr>
          <td>Bus Kilometer</td>
          <td>{faculty.BusKilometer}</td>
        </tr>
        <tr>
          <td>Bus Average</td>
          <td>{faculty.BusAvrage}</td>
        </tr>
        <tr>
          <td>Bus Rto</td>
          <td>{faculty.BusRto}</td>
        </tr>
      </table>
    </>
  );
}

export default Detailfaculties;
