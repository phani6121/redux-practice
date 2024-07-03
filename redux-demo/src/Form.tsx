import { useState } from "react";
import { useDispatch } from "react-redux";
import { deposit, withdraw, nameUpdate, mobileUpdate } from "./action";

const Form: React.FC = () => {
    let dispatch = useDispatch();
    //Here useDispatch hook use to change the state 
    const [amount, setAmount] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [mobile, setMobile] = useState<string>("");
    const [transId, setTransId] = useState<number>(1);
    return (
        <>
            <div className="container">
                <h1>Form</h1>
                <div className="row">
                    <div className="col-4">
                        <input
                            className="form-control"
                            type="number"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => {
                                let data = e.target.value;
                                setAmount(data);
                            }}
                        />
                    </div>
                    <button
                        className="btn btn-primary col-1"
                        onClick={() => {
                            // dispatch({ type: "deposit", payload: amount });
                            dispatch(deposit(amount))
                            setTransId(transId + 1)
                            dispatch({
                                type: "ADD", payload: {
                                    id: transId,
                                    amount: amount,
                                    date: new Date(),
                                    type: "Credit"
                                }
                            })
                            setAmount("");
                        }}
                    >
                        Deposit
                    </button>
                    <button
                        className="btn btn-danger mx-2 col-1"
                        onClick={() => {
                            // dispatch({ type: "withdraw", payload: amount });
                            dispatch(withdraw(amount))
                            setTransId(transId + 1)
                            dispatch({
                                type: "ADD", payload: {
                                    id: transId,
                                    amount: amount,
                                    date: new Date(),
                                    type: "Debit"
                                }
                            })
                            setAmount("");
                        }}
                    >
                        withdraw
                    </button>
                </div>
                <div className="row mt-2">
                    <div className="col-4">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Enter Full Name"
                            value={fullName}
                            onChange={(e) => {
                                let data = e.target.value;
                                setFullName(data);
                            }}
                        />
                    </div>
                    <button
                        className="btn btn-primary col-1 mx-2"
                        onClick={() => {
                            // dispatch({ type: "nameUpdate", payload: fullName });
                            dispatch(nameUpdate(fullName))
                            setFullName("");
                        }}
                    >
                        Update
                    </button>
                </div>
                <div className="row mt-2">
                    <div className="col-4">
                        <input
                            className="form-control"
                            type="number"
                            placeholder="Enter Mobile"
                            value={mobile}
                            onChange={(e) => {
                                let data = e.target.value;
                                setMobile(data);
                            }}
                        />
                    </div>
                    <button
                        className="btn btn-primary col-1 mx-2"
                        onClick={() => {
                            // dispatch({ type: "mobileUpdate", payload: mobile });
                            dispatch(mobileUpdate(mobile))

                            setMobile("");
                        }}
                    >
                        Update
                    </button>
                </div>
                <button
                    className="btn btn-danger col-1 mt-2"
                    onClick={() => {
                        dispatch({ type: "reset" });
                        setMobile("");
                    }}
                >
                    Reset
                </button>
            </div>
        </>
    );
}

export default Form;