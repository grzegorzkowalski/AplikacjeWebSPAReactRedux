import { createSlice } from '@reduxjs/toolkit';
import {counterSlice} from "../counter/counterSlice";

const initialState = {
    isCounting: false,
    value: 0,
    list: []
}

export const stopWatchSlice = createSlice({
    name: 'stopWatch',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        start: (state) => {
            state.isCounting = true;
        },
        stop: (state) => {
            state.isCounting = false;
        },
        addToList: (state) => {
            state.list.push(state.value);
        },
    },
});

export const { increment, start, stop, addToList } = stopWatchSlice.actions;

export default stopWatchSlice.reducer;
