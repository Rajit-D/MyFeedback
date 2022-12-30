import React, {useState, useEffect} from 'react'

function Login() {

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
            alert("Login successful");
            setUserName("");
            setPassword("");
        }
        else{
            alert("Unsuccessful");
        }
    }
    return (
        <>
            <style jsx>
                {`
                    img{
                        height: 452px;
                        width: 599px;
                    }
                `}
            </style>
            <div className="container my-5 justify-content-center">
                <div className="row justify-content-start">
                    <div className="col-4">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">User name</label>
                                <input onChange={getUserName} value={userName} type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input onChange={getPassword} value={password} type="password" className="form-control" />
                            </div>
                            <button type="submit" onClick={checkCreds} className="btn btn-primary btn-sm">Submit</button>
                        </form>
                    </div>
                    <div className="col-6 align-items-center">
                        <img src="https://blush.design/api/download?shareUri=zXgTGU8plXvw0QYn&c=Skin_0%7Effbf80-0.1%7Effbf80&w=800&h=800&fm=png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login