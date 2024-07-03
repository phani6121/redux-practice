import React from 'react';
import { useDispatch } from 'react-redux';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    // Define other fields from your API response
}

const UserData: React.FC = () => {
    const dispatch = useDispatch();

    const fetchData = async () => {
        try {
            console.log("Fetching user data...");
            let res = await fetch("https://jsonplaceholder.typicode.com/users/2");
            let data: User = await res.json();

            dispatch({ type: "ADD_USER", payload: data });
            console.log("User data fetched:", data);
            // Here "ADD_USER" is the type of action you dispatch to Redux
            // Make sure you define this action type in your Redux actions
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <button className='btn btn-primary' onClick={() => fetchData()}>
            Get User Data
        </button>
    );
};

export default UserData;
