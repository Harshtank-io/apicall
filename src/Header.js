import { Link } from "react-router-dom";

import './css/header.css'





function Header(){

    return(
        <>
        <div class="nav">
        <Link  to="./" className="link" ><button>Home</button></Link>&nbsp;
        <Link  to="./Faculties" className="link"><button>Faculties</button></Link>&nbsp;
        <Link to="./faculty/15" className="link" ><button>Details of Faculties</button> </Link>&nbsp;
        </div>
        </>
    );

}

export default Header;