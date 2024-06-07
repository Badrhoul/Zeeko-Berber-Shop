import "./appointmentList.css"
import Appointments from './appointments'
import { useState, useEffect } from 'react'


function AppointmentList({ appointmentList, handleDelete }) {
console.log(appointmentList)
    return (
        <>
        <div>Appintment list Div</div>
            <div>
                {appointmentList && appointmentList.map((item) => {
                    return <Appointments key={item._id} appointment={item} handleDelete={handleDelete}></Appointments>
                })}

            </div>
        </>
    )
}

export default AppointmentList