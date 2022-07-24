import {useEffect ,useState} from "react";
import {Link} from 'react-router-dom';
import './css/faculties.css'

function Faculties(){
        const [faculties , setFaculties] = useState([]);
        useEffect(() => {
            fetch("https://62dc4f5257ac3c3f3c599aea.mockapi.io/faculties" )
            .then((e) => {
                return e.json();
            })
            .then((e) => {
                setFaculties(e);
            });
        },[]);

        const formatedFaculty = faculties.map((e) =>{
            return (
                <>
                  <div class="col-3">
                <Link className='names' to={"../faculty/"  + e.id}> 
              
                  <img class="img-fluid" alt="a" src={e.FacultyImage} />
          <h4>{e.FacultyName}</h4> 
       
                </Link>
                </div>
                </>
            );
        });
        return (
            <>
            <div class="container">
                <div class="row">{formatedFaculty}</div>
            </div>
            </>
        );
}

export default Faculties;