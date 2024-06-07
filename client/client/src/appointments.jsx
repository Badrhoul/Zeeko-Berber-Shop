import React from 'react';
import './appointments.css'

const Appointments = ({ appointment, handleDelete }) => {
    return (
        <>
            <div>
                <h2>{appointment.name}</h2>
                <h4>{appointment.time} </h4>
                <h4>{appointment.date}</h4>
                <button onClick={() => handleDelete(appointment._id)}>DELETE</button>
            </div>
        </>
    );
}

export default Appointments;