

const CohortCard = ({ trainee }) => {
    return(
        <div className='cohort-card' >
               <h1>
                   {trainee.name}
               </h1>
               <p>
                   {trainee.description}
               </p>
               <small>start date: {trainee.startDate}</small>
               <small>end date: {trainee.endDate}</small>
           </div>
    );
}

export default CohortCard;