import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAppointment, deleteAppointment, getAppointments, updateAppointment } from './Redux/adminActions'
import { invalidate } from './Redux/AdminSlice'

const Dashboard = () => {
    const [data, setdata] = useState({})
    const handleChange = e => {
        const { name, value } = e.target
        setdata({ ...data, [name]: value })
    }

    const dispatch = useDispatch()

    const { appointments,
        appointmentAdded,
        appointmentDelete,
        appointmentUpdated,
        loading,
        error } = useSelector(state => state.admin)

    useEffect(() => {
        dispatch(getAppointments())
    }, [appointmentAdded])
    useEffect(() => {
        if (appointmentAdded) {
            dispatch(getAppointments())
            dispatch(invalidate())
        }
    }, [appointmentAdded])
    useEffect(() => {
        if (appointmentDelete) {
            dispatch(getAppointments())
            dispatch(invalidate())
        }
    }, [appointmentDelete])

    return <>
        <div>
            <button className="btn btn-accent" onClick={() => window.my_modal_3.showModal()}>Add +</button>
        </div>

        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mob</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Desc</th>
                    <th>date</th>
                    <th>time</th>

                </tr>
            </thead>
            <tbody>
                {
                    appointments && appointments.map(item => <tr key={item}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.age}</td>
                        <td>{item.gender}</td>
                        <td>{item.desc}</td>
                        <td>{item.date}</td>
                        <td>{item.time}</td>
                        <td>
                            <button className='btn btn-warning'>Edit</button>
                            <button onClick={e => dispatch(deleteAppointment(item))} className='btn btn-error'>Delete</button>
                        </td>
                    </tr>)
                }

            </tbody>
        </table>



        <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box">
                <button type='button' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
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

                <button onClick={e => dispatch(addAppointment(data))} className="btn btn-primary w-full mt-4">Add Appointment</button>

            </form>

        </dialog>
    </>
}


//name
//email
//mobile
//gender
//age
//desc
export default Dashboard