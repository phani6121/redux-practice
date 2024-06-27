
import { createStore } from "redux";
//Here this createStore method is map of the initial state and reducer function for return to new state

interface AccountState {
    balance: number;
    fullName: string;
    mobile: number | null;
}

const initialState = {
    balance: 0,
    fullName: "",
    mobile: null
}

function accountReducer(state = initialState, action: any) {
    if (action.type === "deposit")
        return { ...state, balance: state.balance + action.payload }
    else if (action.type === "withdraw")
        return { ...state, balance: state.balance - action.payload }
    else if (action.type === "mobileUpdate")
        return { ...state, mobile: action.payload }
    else if (action.type === "nameUpdate")
        return { ...state, fullName: action.payload }
    else
        return state


}

const store = createStore(accountReducer)

console.log(store.getState());
//Here getState function is given initial state 


store.dispatch({ type: "deposit", payload: 1000 })

console.log(store.getState());

store.dispatch({ type: "withdraw", payload: 100 })

console.log(store.getState());

store.dispatch({ type: "nameUpdate", payload: "Phanindra" })

console.log(store.getState());

store.dispatch({ type: "mobileUpdate", payload: 8501830367 })

console.log(store.getState());

