import "./appointmentList.css"
import Appointments from './appointments'



function AppointmentList({ appointmentList, handleDelete }) {
    const now = new Date()
    const future = [...appointmentList].filter(event=>{new Date(event.date) >=now})

    let sortedList = [...appointmentList].sort((a,b)=> new Date(a.date) - new Date (b.date));
    let sortedByTime = [...sortedList].sort((a,b)=> b.time-a.time)
console.log('this is the sorted by time',sortedByTime)
    return (
        <>
            <div>
                {sortedByTime && sortedByTime.map((item) => {
                    return <Appointments key={item._id} appointment={item} handleDelete={handleDelete}></Appointments>
                })}
            </div>
        </>
    )
}

export default AppointmentList