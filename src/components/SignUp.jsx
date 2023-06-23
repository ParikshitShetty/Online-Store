import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { signUpUser } from "../redux/actions/UserAction";
import Navbar from "./utilities/Navbar";
import {  useNavigate } from "react-router-dom";


 

const Up = () =>{
    const users = useSelector(state => state.userReducer )

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [details, setDetails] = useState({
        firstName: "",
        lastName:"",
        email: "",
        password : ""
    })

   
    console.log(users.formSubmitted)

    
    const handleChange = (e) =>{
        // const name = e.target.name;
        // const value = e.target.value;
        const {name, value} = e.target;
        // console.log(name,value)
        setDetails((details)=>{
            return{...details,[name]: value}
        })

        
    }
    console.log(users.user)


    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(signUpUser(details));
    }

    const navigator = () =>{
        if(users.formSubmitted == true){
        navigate("/login");
        }
    }
  

    return(
        <>
       <Navbar></Navbar>
        <div>
            <form onSubmit={handleSubmit}>
                <h3 className="font-semibold">SIGN UP</h3>
                <label >
                    FirstName:
                        <input type="text" name="firstName" className="m-4" onChange={handleChange}/>
                </label>    <br />
                <label >
                    LastName:
                            <input type="text" name="lastName" className="m-4" onChange={handleChange}/>
                </label>   <br />      
                <label >
                    Email:
                        <input type="email" name="email" className="m-4" onChange={handleChange}/>
                </label> <br />
                <label htmlFor="">
                    Password:
                        <input type="password" name="password"  className="m-4"onChange={handleChange} />
                </label>   <br />
               <label htmlFor="submit">
                    <button type="submit" onClick={ navigator}>submit</button>
                </label>   
                
            </form>

           


        </div>
        </>
    )

} 

export default Up;

