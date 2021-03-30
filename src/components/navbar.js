import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    return(
        <nav className='navbar' >
            <Link  className='logo' to='/' ><h1 >Consult Interview</h1></Link>
            <ul>
                <li>
                <Link to='/create' >Create User</Link>
                </li>
                <li>
                <Link to='/cohort' >Cohort</Link>
                </li>
            </ul>
        
        </nav>
    );
}

export default Navbar;