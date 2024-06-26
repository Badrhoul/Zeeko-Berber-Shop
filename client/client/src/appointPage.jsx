import { useState, useEffect } from 'react'
import AppointmentList from './appointmentList'
import Navbar from './Navbar';

function AppointmentPage() {
    const apiUrl = 'http://localhost:3000/';

    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [list, setList] = useState([])

    let appList;


    useEffect(() => {
        fetch(apiUrl + 'appointments')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('appointments:', data);

                setList([...data])
                
            })
    }, [])

    function handleDelete(someId) {
        fetch(apiUrl + `appointments/${someId}`, { method: 'DELETE' })
            .then(() => console.log('Delete successful'));
        setList((prevList) => prevList.filter((item) => item._id !== someId))
    }




    return (
        <>
        <Navbar></Navbar>
            <AppointmentList appointmentList={list} handleDelete={handleDelete} />
        </>
    )
}

export default AppointmentPage