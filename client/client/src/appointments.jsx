import React from 'react';
import './appointments.css'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const Appointments = ({ appointment, handleDelete }) => {

    const dateFormatter = format(new Date(appointment.date), 'PPP')

    

    return (
        <div className='appointmentCard'>
            <h2 className='appointmentName'>{appointment.name}</h2>
            <h4 className='appointmentTime'>{appointment.time}</h4>
            <h4 className='appointmentDate'>{dateFormatter}</h4>
            <button
                className='deleteButton'
                onClick={() => handleDelete(appointment._id)}
            >
                DELETE
            </button>
        </div>
    );
}

export default Appointments;