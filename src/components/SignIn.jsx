import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { signInUser } from "../redux/actions/UserAction";
import Navbar from "./utilities/Navbar";
import { useNavigate } from "react-router-dom";



const In = () =>{
    const users = useSelector(state => state.userReducer )

    const dispatch = useDispatch()

   const navigate = useNavigate()
   
    console.log(users.user)

    
    const handleChange = (e) =>{
        // const name = e.target.name;
        // const value = e.target.value;
        const {name, value} = e.target;
        // console.log(name,value)
        // setDetails((details)=>{
        //     return{...details,[name]: value}
        // })

        
    }
    // console.log(details)


    const handleSubmit = (e) =>{
        e.preventDefault();
       
        
        
    }
  

    return(
        <>
       <Navbar></Navbar>
        <div>
            <form onSubmit={handleSubmit}>
                <h3 className="font-semibold">SIGN IN</h3>
                <label htmlFor="">
                    Email:
                        <input type="email" name="email" className="m-4" onChange={handleChange}/>
                </label> <br />
                <label htmlFor="">
                    Password:
                        <input type="password" name="password"  className="m-4"onChange={handleChange} />
                </label>   <br />
               <label htmlFor="submit">
                    <button type="submit" onClick={()=> navigate("/")} >submit</button>
                </label>   
                
            </form>

           


        </div>
        </>
    )

} 

export default In;
