import React from 'react'
import { useSelector } from 'react-redux';
//useSelector hook we can use to get the state 
import { RootState } from "./store" // adjust the path as per your actual setup



const Account: React.FC = () => {

    let data = useSelector(
        (state: RootState) => {
            return state
        }
    )
    console.log(data);

    return (
        <>
            <div className='container'>
                <h1 className='text-primary'> Account Details</h1>
                <table className='table table-bordered w-50'>
                    <thead>
                        <tr>
                            <th>Balance</th>
                            <th>User Name</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.account.balance}</td>
                            <td>{data.account.fullName}</td>
                            <td>{data.account.mobile}</td>
                        </tr>
                    </tbody>
                </table>
                <h1 className='text-primary'> Transaction Details</h1>
                <table className='table table-bordered w-50'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Amount</th>
                            <th>Type</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.transaction.map((tr, index) => (
                            <tr key={tr.id}>
                                <td>{tr.id}</td>
                                <td>{tr.amount}</td>
                                <td>{tr.type}</td>
                                <td>{tr.date.toString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>


            </div>
        </>
    )
}

export default Account;
