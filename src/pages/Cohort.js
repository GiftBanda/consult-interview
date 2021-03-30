import {  useEffect, useState } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
import { css } from "@emotion/core";
import CohortCard from '../components/cohort_card';

//Css styles for the loading spinner
const override = css`
  margin: 0rem 0rem;
`;

//Cohort functional component
const Cohort = () => {

    const [training, setTraining] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchCohort();
    }, []);

    const fetchCohort = async () => {
        await fetch(`http://ags-stage.demo.co.zm/api/v1/interview/cohort/list`)
            .then(res => res.json())
            .then(data => {
                setTraining(data.cohorts);
                setIsLoading(!isLoading);
                console.log(training)
            })
            .then(res => console.log(res))
            .catch(error => console.log('Error:', error))
    }

    //Retrieve a list of employees from the server
    const [users, setUser] = useState([]);
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


    // Accept employees into a cohort
    useEffect(() => {
        acceptUser();
    }, []);
    const acceptUser = async () => {
        await fetch(`http://ags-stage.demo.co.zm/api/v1/interview/employee/accept`, {
            method: 'POST',
            body: JSON.stringify({
                employeeId: users.id,
            }),
            headers: {'Content-type': 'application/json'}
        })
        .then(res => console.log(res.status))
        .catch(error => console.log(error))
    }

    //Reject employees from a cohort
    useEffect(() => {
        rejectUser();
    }, []);
    const rejectUser = async () => {
        await fetch(`http://ags-stage.demo.co.zm/api/v1/interview/employee/accept`, {
            method: 'POST',
            body: JSON.stringify({
                employeeId: users.id,
            }),
            headers: {'Content-type': 'application/json'}
        })
        .then(res => console.log(res.status))
        .catch(error => console.log(error))
    }

    return(
        <div className='cohort-section' >

        <div className='card-grid' >
            
          { isLoading ? <FadeLoader height={15} width={5} radius={2} margin={2} css={override} /> : training.map( (trainee) => (
              <CohortCard key={trainee.id} trainee={trainee} />
          ))}
           
        </div>
        </div>
    );
}

export default Cohort;


