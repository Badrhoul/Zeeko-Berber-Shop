import "./appointmentList.css"
import Appointments from './appointments'



function AppointmentList({ appointmentList, handleDelete }) {

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