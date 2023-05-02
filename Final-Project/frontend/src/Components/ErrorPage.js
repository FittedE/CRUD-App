import {Link} from 'react-router-dom';
import './ErrorPage.css'

function ErrorPage() {
    return(
        <div>
            <h1>Invalid Route</h1>
            <Link to='/'>
                <button className='button'>Back</button>
            </Link>    
        </div>
    )
}

export default ErrorPage;