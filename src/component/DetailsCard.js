import './Card.css';
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function Card() {
    const location = useLocation()
    const movieDetails = location.state
    const navigate = useNavigate()
    function handleClick() {
        navigate("/");       
      }

    return(
        <div className="details">
    <div className="details-card">
  
  <div className="container">
    <h4><b>Details</b></h4> 
    <p>Title : {movieDetails?.title}</p>
    <p>Created : {movieDetails?.created}</p> 
    <p>ReleaseDate :{movieDetails?.releaseDate}</p>
    <p>Producers :{movieDetails?.producers.map((producer)=>producer)}</p>
    <button className="button button1" onClick={handleClick}>BACK</button>
  </div>
</div>
</div>
    )
}
export default Card