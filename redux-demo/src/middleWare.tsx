import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

// Define initial state
interface UserState {
    userData: {
        // Define properties of userData
    }
}

const initialState: UserState = {
    userData: {
        // Initial values for userData properties
    }
};

// Define action types
type Action = {
    type: "ADD_USER";
    payload: any; // Define the type of payload
};

// Define reducer function
function userReducer(state: UserState = initialState, action: Action): UserState {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                userData: action.payload // Assuming action.payload is the new userData object
            };
        default:
            return state;
    }
}

// Create Redux store
const store = createStore(userReducer, applyMiddleware(thunk));

export default store;
