import { createSlice } from "@reduxjs/toolkit";
import { addAppointment, deleteAppointment, getAppointments, updateAppointment } from "./adminActions";

const adminSlice = createSlice({
    name: "adminSlice",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            state.appointmentAdded = false
            state.appointmentDelete = false
            state.appointmentUpdated = false
        }
    },

    extraReducers: builder => builder

        .addCase(getAppointments.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getAppointments.fulfilled, (state, { payload }) => {
            state.loading = false
            state.appointments = payload
        })
        .addCase(getAppointments.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        

        .addCase(addAppointment.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(addAppointment.fulfilled, (state, { payload }) => {
            state.loading = false
            state.appointmentAdded = true
        })
        .addCase(addAppointment.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(updateAppointment.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(updateAppointment.fulfilled, (state, { payload }) => {
            state.loading = false
            state.appointmentUpdated = true
        })
        .addCase(updateAppointment.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(deleteAppointment.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(deleteAppointment.fulfilled, (state, { payload }) => {
            state.loading = false
            state.appointmentDelete = true
        })
        .addCase(deleteAppointment.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = adminSlice.actions
export default adminSlice.reducer