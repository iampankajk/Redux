import {createStore} from 'redux';
import {createSlice,configureStore} from '@reduxjs/toolkit'

const initialCounterState = {counter:0, showCounter:false};

const counterSlice = createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increament(state){
            state.counter++;
        },
        decreament(state){
            state.counter--;
        },
        toggle(state){
          state.showCounter = !state.showCounter;
        },
    }
});


const initialAuthState = {
    isAuthenticated:false,
};
const authSlice = createSlice({
    name: 'authentication',
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated=true;
        },
        logout(state){
            state.isAuthenticated=false;
        }
    }
})


const store = configureStore({
    reducer:counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;