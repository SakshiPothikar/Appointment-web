import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api";

export const getAppointments = createAsyncThunk(
    "getAppointments",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/appointments")
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const addAppointment = createAsyncThunk(
    "addAppointment",
    async (appointmentData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.post("/appointments", appointmentData)
            return true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const updateAppointment = createAsyncThunk(
    "updateAppointment",
    async (appointmentData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.put(`/appointments/${appointmentData.id}`,
                appointmentData)
            return true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const deleteAppointment = createAsyncThunk(
    "deleteAppointment",
    async (appointmentData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.delete(`/appointments/${appointmentData.id}`,
                appointmentData)
            return true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })