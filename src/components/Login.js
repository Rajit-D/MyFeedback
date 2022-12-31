import React, {useState, useEffect} from 'react'
import logo from "./logIn.svg";

function Login(props) {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [userCred, setUserCred] = useState([]);

    
    const getUserName=(e)=>{
        setUserName(e.target.value);
    }

    const getPassword=(e)=>{
        setPassword(e.target.value);
    }

    const fetchCreds = async () => {
        const url = "https://63a4522e2a73744b00740350.mockapi.io/login";
        let data = await fetch(url);
        let parsedData = await data.json();
        setUserCred(parsedData);
    };

    useEffect(() => {
        fetchCreds();
    }, []);


    const checkCreds = (e) => {
        e.preventDefault();

        let flag= false;

        for(let i of userCred){
            if(i.username === userName){
                if(i.password === password){
                    flag=true;
                    break;
                }
                else{
                    flag=false;
                }
            }
            else{
                flag=false;
            }
        }
        if(flag){
            props.showAlert("Login successful","success");
            setUserName("");
            setPassword("");
        }
        else{
            props.showAlert("Login unsuccessful","danger");
        }
    }
    return (
        <>
            <style jsx>
                {`
                    body {
                        background-color: #F4E3B2;
                    }
                    input[type="text"], input[type="password"] {
                        background-color: #F4E3B2;
                        border: 1px solid black
                    }
                    .animated {
                        height: 500px;
                        width: 472px;
                        position: relative;
                        animation: moveUpAndDown 2s ease-in-out infinite;
                    }

                    @keyframes moveUpAndDown {
                        0% {
                        top: 0;
                        }
                        50% {
                        top: -30px;
                        }
                        100% {
                        top: 0;
                        }
                    }
                     @media (max-width: 520px){
                        .animated{
                           height: 300px
                    }
                `}
            </style>

            <div className="container my-5">
                <div className="row justify-content-between">
                    <div className="col-lg-5 my-5">
                        <form>
                            <div className="col">
                                <label htmlFor="exampleInputEmail1" className="form-label">User name</label>
                                <input onChange={getUserName} value={userName} type="text" className="form-control" />
                            </div>
                            <div className="col my-2">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input onChange={getPassword} value={password} type="password" className="form-control" />
                            </div>
                            <button type="submit" onClick={checkCreds} className="btn btn-outline-danger btn-sm mt-4">Submit</button>
                        </form>
                    </div>
                    <div className="col-lg-5 my-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={logo} alt="pic" style={{ height: '400px', width: '410px' }} className="animated" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login