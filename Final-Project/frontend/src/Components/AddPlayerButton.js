import './AddPlayerButton.css'
import {Link} from 'react-router-dom'

function AddRemoveButtons(props) {
    if(props.isLoggedIn) {
        return(
            <div className='add-remove-buttons'>
                <Link to="/add-item">
                <button className='add-button'>+Add Player</button>
                </Link>
            </div>
        )
    }
}

export default AddRemoveButtons;