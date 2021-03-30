import { useState } from "react";
import {useHistory} from 'react-router-dom';


const Create = () => {

    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phone: ''
    });

    const history = useHistory();

    const handleChange = (event) => {
        const {name, value} = event.target;

        setUser((prevValue) => {

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

    const addEmployee = (event) => {

        event.preventDefault();

            fetch(`http://ags-stage.demo.co.zm/api/v1/interview/employee/create`, {
                method: 'POST',
                body: JSON.stringify({ user }),
                headers: {'Content-type': 'application/json'}
            })
            .catch(error => console.log('Error:', error))
            .then(response => response.status === 200 ? history.push('/') : console.log('Success:', response));

            setUser({
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                phone: ''
            });
    }

    return(
        <div className='create-user' >
            <form onSubmit={addEmployee} >
                <h1>Create New User</h1>
            <label htmlFor="firstname">Firstname <span>*</span> </label>
                <input id='firstname' value={user.firstname} onChange={handleChange} name='firstname' placeholder='Gift' required ></input>
                <label htmlFor="lastname">Lastname<span>*</span> </label>
                <input id='lastname' value={user.lastname} onChange={handleChange} name='lastname' placeholder='Banda' required ></input>
                <label htmlFor="email">Email<span>*</span> </label>
                <input id='email' value={user.email} onChange={handleChange} name='email' type='email' placeholder='info@ags.com' required ></input>
                <label htmlFor="password">Password<span>*</span> </label>
                <input id='password' value={user.password} onChange={handleChange} name='password' type='password' placeholder='Enter your password' required ></input>
                <label htmlFor="phone">Phone<span>*</span> </label>
                <input id='phone' value={user.phone} onChange={handleChange} name='phone' type='tel' placeholder='+260' required ></input>
                <button className='btn' type='submit' >Register</button>
            </form>
        </div>
    );
}

export default Create;