import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "./AdminSlice";


const reduxStore = configureStore({
    reducer: {
        admin: AdminSlice,
    },
})

export default reduxStore