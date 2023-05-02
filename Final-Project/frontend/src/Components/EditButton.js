import './EditButton.css'
import {Link} from 'react-router-dom'


function EditButton(props) {
    let route = './edit-item/' + props._id;
    return (
        <div>
            <Link to={route}>
            <button className='edit-button'>Edit</button>
            </Link>
        </div>
    )
}

export default EditButton;