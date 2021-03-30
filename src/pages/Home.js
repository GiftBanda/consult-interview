import { useEffect, useState } from 'react';
import Card from '../components/card';
import { css } from "@emotion/core";
import FadeLoader from 'react-spinners/FadeLoader';


const override = css`
  margin: 11rem 28rem;
`;


const Home = () => {

    const [users, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        await fetch(`http://ags-stage.demo.co.zm/api/v1/interview/employee/list`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setUser(data.employees);
            setIsLoading(!isLoading);
        })
        .catch(err => console.log(err))
    }

    

    return(
        <div className='home' >
            <h1>
                List of Users
            </h1>
            <section className='card-grid' >
                { isLoading ? <FadeLoader height={15} width={5} radius={2} margin={2} css={override} /> : users.map( (user) => (
                    <Card  user={user} />
                ))} 
            </section>
        </div>
    );
}

export default Home;
