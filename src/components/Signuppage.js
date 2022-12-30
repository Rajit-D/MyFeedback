import React, { useEffect, useState } from "react";
import axios from "axios";

function Signuppage() {
    const [userCred, setUserCred] = useState([]);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const getFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const getLastName = (e) => {
        setLastName(e.target.value);
    };

    const getUserName = async (e) => {
        setUserName(e.target.value);
    };

    const getPassword = (e) => {
        setPassword(e.target.value);
    };

    const checkDuplicate = async () => {
        const url = "https://63a4522e2a73744b00740350.mockapi.io/login";
        let data = await fetch(url);
        let parsedData = await data.json();
        setUserCred(parsedData);
    };

    useEffect(() => {
        checkDuplicate();
    }, []);

    const setUserData = (e) => {
        e.preventDefault();
        let flag = false;
        if (
            userName.length === 0 ||
            password.length === 0 ||
            firstName.length === 0 ||
            lastName.length === 0
        ) {
            alert("Cannot be Empty");
        }
        else {
            flag = false;
            for (let i of userCred) {
                if (i.username === userName) {
                    flag = true;
                    break;
                }
                else
                    flag = false;
            }
            if (flag === false) {
                const loginData = {
                    username: userName,
                    password: password,
                    firstname: firstName,
                    lastname: lastName,
                };
                axios.post(
                    "https://63a4522e2a73744b00740350.mockapi.io/login",
                    loginData
                );
                setFirstName("");
                setLastName("");
                setUserName("");
                setPassword("");
            }
            else
                alert("UserName already exists");
        }
    };

    return (
        <>
            <style jsx>
                {`
                    body {
                        background-color: lightblue;
                    }
                    input[type="text"], input[type="password"] {
                        background-color: lightblue;
                        border: 1px solid black
                      }
                `}
            </style>
            <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="row justify-content-center">
                    <div className="container col-12 my-5">
                        <div className="row justify-content-center">
                            <div className="col-4 my-5 gap-5">
                                <form className="needs-validation" noValidate>
                                    <div className="col">
                                        <label htmlFor="validationCustom01" className="form-label">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationCustom01"
                                            onChange={getFirstName}
                                            value={firstName}
                                            required
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="validationCustom02" className="form-label">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationCustom02"
                                            onChange={getLastName}
                                            value={lastName}
                                            required
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="validationCustomUsername" className="form-label">
                                            Username
                                        </label>
                                        <div className="input-group has-validation">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="validationCustomUsername"
                                                onChange={getUserName}
                                                value={userName}
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="validationCustom03" className="form-label">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            onChange={getPassword}
                                            value={password}
                                            required
                                        />
                                    </div>
                                    <div className="col">
                                        <button
                                            className="btn btn-primary mx-auto btn-sm my-3"
                                            type="submit"
                                            onClick={setUserData}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-6 mx-4">
                                <img src="https://blush.design/api/download?shareUri=MdJ1m8DFRYTHAc06&c=Skin_0%7Effeb81-0.1%7Effbf80&w=800&h=800&fm=png" alt="" style={{ height: '500px', width: '620px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signuppage;
