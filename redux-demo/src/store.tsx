
import { combineReducers, createStore } from "redux";
//Here this createStore method is map of the initial state and reducer function for return to new state

// Define the interface for AccountState
interface AccountState {
    balance: number;
    fullName: string;
    mobile: number | null;
}

// Define the initial state
const initialState: AccountState = {
    balance: 0,
    fullName: "",
    mobile: null

}
interface Transaction {
    id: number;
    amount: number;
    type: string; // Assuming type is a string representing transaction type, adjust as necessary
    date: Date; // Assuming date is a Date object, adjust as necessary
}


type TransactionAction =
    { type: "ADD"; payload: Transaction; }

// Define action types
type Action =
    | { type: "deposit"; payload: number; }
    | { type: "withdraw"; payload: number; }
    | { type: "nameUpdate"; payload: string; }
    | { type: "mobileUpdate"; payload: number; }
    | { type: "reset"; }
//Action is a union type, which means it can hold values that match any of its member types

// Define the reducer function
function accountReducer(state: AccountState = initialState, action: Action): AccountState {
    switch (action.type) {
        case "deposit":
            return { ...state, balance: state.balance + +action.payload };
        case "withdraw":
            return { ...state, balance: state.balance - +action.payload };
        case "mobileUpdate":
            return { ...state, mobile: action.payload };
        case "nameUpdate":
            return { ...state, fullName: action.payload };
        case "reset":
            return initialState
        default:
            return state;
    }
}

function transactionReducer(state: Transaction[] = [], action: TransactionAction): Transaction[] {
    switch (action.type) {
        case "ADD":
            return [...state, {
                id: action.payload.id,
                amount: action.payload.amount,
                type: action.payload.type,
                date: action.payload.date
            }]

        default:
            return state
    }

}
const rootReducer = combineReducers({
    account: accountReducer,
    transaction: transactionReducer
})

// Define RootState
export type RootState = ReturnType<typeof rootReducer>;

// Create the Redux store
const store = createStore(rootReducer);

export default store;









// //Test the store by dispatching actions
// console.log(store.getState()); // Initial state

// store.dispatch({ type: "deposit", payload: 1000 });
// console.log(store.getState()); // After deposit

// store.dispatch({ type: "withdraw", payload: 100 });
// console.log(store.getState()); // After withdrawal

// store.dispatch({ type: "nameUpdate", payload: "Phanindra" });
// console.log(store.getState()); // After name update

// store.dispatch({ type: "mobileUpdate", payload: 8501830367 });
// console.log(store.getState()); // After mobile update





// if (action.type === "deposit")
//     return { ...state, balance: state.balance + action.payload }
// else if (action.type === "withdraw")
//     return { ...state, balance: state.balance - action.payload }
// else if (action.type === "mobileUpdate")
//     return { ...state, mobile: action.payload }
// else if (action.type === "nameUpdate")
//     return { ...state, fullName: action.payload }
// else
//     return state