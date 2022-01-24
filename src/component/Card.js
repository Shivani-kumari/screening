import './Card.css';
import { useNavigate } from "react-router-dom";
function Card({movie}) {
 const navigate = useNavigate()
    function handleClick() {
        navigate("/Details",{state : movie});       
      }
    return(
        <div className="home-card">
    <div className="card">
  
  <div className="container">
    <h4><b>Title</b></h4> 
    <p>{movie.title}</p> 
    <button className="button button1" onClick={handleClick}>Details</button>
  </div>
  </div>
</div>
    )
}
export default Card