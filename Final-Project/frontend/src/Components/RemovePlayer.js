import axios from 'axios';
import './RemovePlayer.css'
import {Link, useNavigate, useParams} from "react-router-dom";

function RemovePlayer() {
    const navigate = useNavigate();
    const {id} = useParams();
    const deletePlayer = (item) => {
        axios
            .delete(`http://localhost:3001/api/items/${id}`)
            .then((res) => {
                navigate('/');
            })
            .catch((err) => {
                console.log('Error from deleteItem');
            })
    }
    return(
        <div>
            <h2 className='remove'>Are you sure you want to remove this player?</h2>
            <div className='buttons'>
            <Link to='/'>
            <button className='yes' onClick={deletePlayer}>Yes</button>
             <button className='no'>No</button>
             </Link>
             </div>
        </div>)

}

export default RemovePlayer;