import { useState} from "react";
import {useHistory} from 'react-router-dom';


const Update = ({ id, firstname, lastname, email, password, phone }) => {

    const [userUpdate, setUserUpdate] = useState({
        id,
        firstname,
        lastname,
        email,
        password,
        phone
    });

    const history = useHistory();

    const handleChange = (event) => {
        const {name, value} = event.target;

        setUserUpdate((prevValue) => {

            if(name === 'firstname') {
                return {
                firstname: value,
                lastname: prevValue.lastname,
                email: prevValue.email,
                password: prevValue.password,
                phone: prevValue.phone
                }
                
            }else if(name === 'lastname') {
                return {
                firstname: prevValue.firstname,
                lastname: value,
                email: prevValue.email,
                password: prevValue.password,
                phone: prevValue.phone
                }
                
            }else if(name === 'email') {
                return {
                firstname: prevValue.firstname,
                lastname: prevValue.lastname,
                email: value,
                password: prevValue.password,
                phone: prevValue.phone
                }
                
            }else if(name === 'password') {
                return {
                firstname: prevValue.firstname,
                lastname: prevValue.lastname,
                email: prevValue.email,
                password: value,
                phone: prevValue.phone
                }
                
            }else if (name === 'phone') {
                return {
                firstname: prevValue.firstname,
                lastname: prevValue.lastname,
                email: prevValue.email,
                password: prevValue.password,
                phone: value
                }
                
            }
        });
    }

    const updateEmployee = (event) => {
        event.preventDefault();

        fetch(`http://ags-stage.demo.co.zm/api/v1/interview/employee/update/${userUpdate.id}`, {
                method: 'PATCH',
                body: JSON.stringify({ userUpdate }),
                headers: {'Content-type': 'application/json'}
            })
            .catch(error => console.log('Error:', error))
            .then(response => response.status === 200 ? history.push('/') : console.log('Success:', response));

            setUserUpdate({
                id: '',
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                phone: ''
            });
    }

    return (<div className='update' >
        <div className='card' key={userUpdate.id} >
            <form onSubmit={updateEmployee} >
                <label htmlFor="firstname">Firstname:</label>
                <input id='firstname' name='firstname'  onChange={handleChange} placeholder={firstname} ></input>
                <label htmlFor="lastname">Lastname:</label>
                <input id='lastname' name='lastname' value={userUpdate.lastname} onChange={handleChange} ></input>
                <label htmlFor="email">Email:</label>
                <input id='email' name='email' value={userUpdate.email} onChange={handleChange}  type='email' ></input>
                <label htmlFor="password">Password:</label>
                <input id='password' name='password' value={userUpdate.password} onChange={handleChange}  type='password' ></input>
                <label htmlFor="phone">Phone:</label>
                <input id='phone' name='phone' value={userUpdate.phone} onChange={handleChange} type='tel' ></input>
               
                <button className='btn btn-primary' type='submit' >Update</button>
  
                
                
            </form>
        </div>
        </div>
    );
}

export default Update;