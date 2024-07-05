import React, { useState, useEffect, useHistory } from 'react';
import './Css Files/Form.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function Form() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [appointments, setAppointments] = useState([]);
    const [availableSlots, setAvailableSlots] = useState([
        '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30'
    ]);

    
    const apiUrl = 'http://localhost:3000/';

    useEffect(() => {
        console.log(date, "effect running")
        if (date) {
            fetch(apiUrl + `appointments/${date}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('appointments:', data);
                    const bookedTimes = data.map(appointment => appointment.time);
                    console.log(bookedTimes, "this is booked times")
                    setAvailableSlots(availableSlots => bookedTimes.length ? availableSlots.filter(slot => !bookedTimes.includes(slot)) : [
                        '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30'
                    ]);

                    console.log(appointments, "appointments")
                    console.log(availableSlots, "available slots")
                })
        }

    }, [date])




    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}\nDate: ${date}\nTime: ${time}`);

        let newAppointment = {}
        newAppointment.name = name;
        newAppointment.date = date;
        newAppointment.time = time;

        const posting = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAppointment)
        }

        fetch(apiUrl + 'appointments', posting)
            .then(response => response.json())
            .then(data => setAppointments([...appointments, data]));

            navigate('/');

    };

    function setNewTime(e) {
        e.preventDefault();
        setTime(e.target.value);
        console.log(e.target.value)

    }

    return (
        <>
        <Navbar></Navbar>
        <form className="form" >
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Time:</label>
                <div className="time-buttons">
                    {availableSlots.map(slot => (
                        <button className={`time-button ${time === slot ? 'selected' : ''}`} key={slot} onClick={setNewTime} name="time" value={slot}>
                            {slot}
                        </button>
                    ))}
                </div>
            </div>
            
            <button type="submit" className="submit-button" onClick={handleSubmit}>Submit</button>
            
        </form>
        </>
    );
}

export default Form;
