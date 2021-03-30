
import {FiEdit} from 'react-icons/fi';
import {Link} from 'react-router-dom';


const Card = ({ user }) => {

    const {id, firstname, lastname, email, password, phone} = user;

    return(
        <div key={user.id} className='card' >
            
                <small htmlFor="firstname">Firstname:</small>
                <h1>{user.firstname}</h1>
                
                <small htmlFor="lastname">Lastname:</small>
                <h1>{user.lastname}</h1>
                <small htmlFor="email">Email:</small>
                <h1>{user.email}</h1>
                
                <small htmlFor="password">Password:</small>
                <h4>{user.password}</h4>
                
                <small htmlFor="phone">Phone:</small>
                <h1>{user.phone}</h1>
                
                
                <Link className='btn btn-primary' to={{pathname:`/update/${id}`, state:{id: id, firstname: firstname, lastname: lastname, email: email, password: password, phone: phone}}} >
                Edit<FiEdit className='btn-icon' />
                </Link>
                         
        </div>
    );
}

export default Card;