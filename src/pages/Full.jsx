import FullCalendar from '@fullcalendar/react'
import daygrid from '@fullcalendar/daygrid'
import interaction from '@fullcalendar/interaction'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAppointment, getAppointments } from '../Redux/adminActions'
// import { getAppointments } from '../redux/adminActions'

const Full = () => {
    const [data, setdata] = useState({})
    const handleChange = e => {
        const { name, value } = e.target
        setdata({ ...data, [name]: value })
    }

    const { appointments, appointmentAdded } = useSelector(state => state.admin)



    const handleDateClick = e => {
        setselectedData(e.dateStr)
        window.my_modal_3.showModal()
    }
    const disptach = useDispatch()


    const handleEventList = e => {
        const { name, desc, time } = e.event._def.extendedProps
        return <div>
            <h6 className='text-red-400' >{name}</h6>
            <span>{desc}: {time}</span>
        </div>
    }
    useEffect(() => {
        if (appointmentAdded) {
            disptach(getAppointments())
        }
    }, [appointmentAdded])
    const [selectedData, setselectedData] = useState()
    useEffect(() => {
        disptach(getAppointments())
    }, [])
    return <>
        <FullCalendar
            plugins={[daygrid, interaction]}
            initialView='dayGridMonth'
            dateClick={handleDateClick}
            events={appointments}
            eventContent={handleEventList}
        />

        <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg">Hello!</h3>
                <input onChange={handleChange} type="text" name="name"
                    placeholder='Enter name' className='input input-bordered w-full my-2 ' />
                <input onChange={handleChange} type="email" name="email"
                    placeholder='Enter emial' className='input input-bordered w-full my-2 ' />
                <input onChange={handleChange} type="number" name="number"
                    placeholder='Enter mobile' className='input input-bordered w-full my-2 ' />
                <input onChange={handleChange} type="number" name="age"
                    placeholder='Enter age' className='input input-bordered w-full my-2 ' />
                <input onChange={handleChange} type="text" name="desc"
                    placeholder='Enter desc' className='input input-bordered w-full my-2 ' />
                <input onChange={handleChange} type="date" name="date" className='input input-bordered w-full my-2 ' />
                <input onChange={handleChange} type="time" name="time" className='input input-bordered w-full my-2 ' />


                <input type="radio" name="gender" id="male"
                    onChange={handleChange}
                    value="male"
                    className='radio radio-primary' />
                <label htmlFor="male">Male</label>

                <input type="radio" name="gender" id="female"
                    onChange={handleChange}
                    value="female"
                    className='radio  radio-primary' />
                <label htmlFor="female">Female</label>

                <button onClick={e => disptach(addAppointment({ ...data, date: selectedData }))} className="btn btn-primary w-full mt-4">Add Appointment</button>

            </form>

        </dialog>

    </>
}

export default Full