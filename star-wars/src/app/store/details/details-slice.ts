import { PayloadAction, createSlice } from "@reduxjs/toolkit"



const initialState = {
    type: '',
    date: [],
}

function addInfoModal(state: any, action: PayloadAction<any>): any {
    return action.payload;
}

function clearModal(state: any, action: PayloadAction<any>) {
    return initialState
}

const datailsSlice = createSlice({
    name: "details",
    initialState,
    reducers: {
        addInfoModal,
        clearModal
    }
})

export const {reducer: modalDetailsReducer, actions} = datailsSlice
