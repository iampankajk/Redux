import {createStore} from 'redux';

const initialState = {counter:0, showCounter:false}
const counterReducer = (state=initialState,action)=>{
    if(action.type==='increament'){
        return {
            counter:state.counter + 1,
            showCounter:state.showCounter
        }
    }
    if(action.type==='decreament'){
        return {
            counter:state.counter - 1,
            showCounter:state.showCounter
        }
    }

    if(action.type === 'toggle'){
        return {
            counter:state.counter,
            showCounter:!state.showCounter
        }
    }
    return state;
};

const store = createStore(counterReducer);

export default store;