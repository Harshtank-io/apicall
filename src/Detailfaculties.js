import {useEffect ,useState} from "react";
import {useParams} from "react-router-dom";

function Detailfaculties(){
  let params = useParams();

  const [faculty , setFaculty] = useState({});

  useEffect(() => {
    fetch("https://62dc4f5257ac3c3f3c599aea.mockapi.io/faculties/" + params.id)
    .then ((e) =>{
        return e.json();
    })
    .then ((e) =>{
        setFaculty(e);
    });
  } , []);
    
  return (
    <>
        <table>
            <tr>
                <td>Id</td>
                <td>{params.id}</td>
            </tr>
            <tr>
                <td>Name</td>
                <td>{faculty.FacultyName}</td>
            </tr>
            <tr>
                <td>Faculty Designation</td>
                <td>{faculty.FacultyDesignation}</td>
            </tr>
            <tr>
                <td>Faculty HighestEducation</td>
                <td>{faculty.FacultyHighestEducation}</td>
            </tr>
            <tr>
                <td>Faculty Experience In Years</td>
                <td>{faculty.FacultyExperienceInYears}</td>
            </tr>
            <tr>
                <td>Faculty Working Since</td>
                <td>{faculty.FacultyWorkingSince}</td>
            </tr>
            <tr>
                <td>Faculty MobileNumber</td>
                <td>{faculty.FacultyMobileNumber}</td>
            </tr>
            <tr>
                <td>Faculty EmailAddress</td>
                <td>{faculty.FacultyEmailAddress}</td>
            </tr>
            <tr>
                <td>Name</td>
                <td>{faculty.FacultyName}</td>
            </tr>
            <tr>
                <td>Faculty Seating</td>
                <td>{faculty.FacultySeating}</td>
            </tr>
            <tr>
                <td>Faculty Profile Description</td>
                <td>{faculty.FacultyProfileDescription}</td>
            </tr>
            <tr>
                <td>Faculty Area Specialization</td>
                <td>{faculty.FacultyAreaSpecialization}</td>
            </tr>
            <tr>
                <td>Faculty Subjects Taught</td>
                <td>{faculty.FacultySubjectsTaught}</td>
            </tr>
            <tr>
                <td>Faculty Image</td>
                <td><img  src={faculty.FacultyImage} alt="asdf"/></td>
            </tr>


        </table>
    </>
  )
}


export default Detailfaculties;