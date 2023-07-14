import React, { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import Navbar from "./utilities/Navbar";
import { useNavigate } from "react-router-dom";
import { saveLoggedIn, saveSignIn,SignIn } from "../redux/actions/SignInAction";


const Login = () =>{
    const users = useSelector(state => state.userReducer )

    const savedUser = useSelector(state => state.signInReducer )

    const dispatch = useDispatch()

    const navigate = useNavigate()
   
    const [loginDetails,setLoginDetails] = useState({
        userName : '',
        password : '',
    })

    const [loggedIn,setLoggedIn] = useState(false)

    const [saveData,setSaveData] = useState(false)

    const handleChange = (e) =>{
        const {name, value} = e.target; 

        setLoginDetails((loginDetails)=>{
            return{...loginDetails,[name]: value}
        })
    }
    //  console.log(loginDetails)
    //  console.log(users)

    const handleSubmit = (e) =>{
        e.preventDefault()

        const userNameValidation= Object.is(users.user.email, loginDetails.userName)

        const passwordValidation = Object.is(users.user.password, loginDetails.password)

        console.log(userNameValidation,passwordValidation)

        if(userNameValidation && passwordValidation){
            setLoggedIn(true)
        }
    }

    const saver = () =>{
        if (saveData) {
        dispatch(saveSignIn(true))
        }
        else{
            dispatch(saveSignIn(false))
        }
        dispatch(SignIn(loginDetails))
        dispatch(saveLoggedIn(true))  
    }

    useEffect(() => {
        if(loggedIn == true){
            navigate('/')
        }
    }, [loggedIn])

    useEffect(()=>{
        if (savedUser.saved) {
        setLoginDetails(()=>{
            return{
                userName : savedUser.SignInData.email,
                password : savedUser.SignInData.password
                }
            });
        }
    },[])
    
    console.log(savedUser)
    console.log(loginDetails)
    console.log(saveData)

    return(
        <>
       {/* <Navbar></Navbar> */}
        <div className="min-h-screen">
        <section className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <span className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                    </svg>  
                </span>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="userName" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required onChange={handleChange} value={loginDetails.userName}/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleChange} value={loginDetails.password}/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" onChange={e => setSaveData(!saveData)}/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-primary-600 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-primary-600 dark:text-gray-300  hover:underline dark:text-primary-500" onClick={e=>navigate('/signup')}>Forgot password?</span>
                            </div>

                            <input type="submit" value="Sign In" className="relative inline-flex text-white bg-gradient-to-br from-green-400 to-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"onClick={saver}/>
                            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                                Don't have an account yet? <span className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={()=> navigate('/signup')}>Sign up</span>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            </section>
    </div>
        </>
    )

} 

export default Login;
