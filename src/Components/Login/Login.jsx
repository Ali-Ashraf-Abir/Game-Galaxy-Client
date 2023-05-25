import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup ,signInWithEmailAndPassword} from "firebase/auth";
import useTitle from '../UseTitle/UseTitle';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    window.scroll(0,0)
    useTitle('login')
    const navigate=useNavigate()
    const { auth, setUser,loginError,setLoginError,registrationSuccess,SetRegistrationSuccess } = useContext(AuthContext)
    const Googleprovider = new GoogleAuthProvider();
    const handleSigninGoogle = () => {

        event.preventDefault()
        signInWithPopup(auth, Googleprovider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                setRegisterError(null)
                setUser(user)
                SetRegistrationSuccess(null)
               navigate('/')
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                setLoginError(errorMessage)
            });

    }

    const handleLogin = (event) => {

        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                console.log(user)
                SetRegistrationSuccess(null)
                // ...
                navigate('/')
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setLoginError(errorMessage)
            });




    }


    return (
        <div className='bg-base-200 w-100% min-h-[100vh] mt-[20px] font-nunito'>
            <h1 className='lg:text-4xl text-center text-3xl pt-[20px]'>Please Login</h1>

            {registrationSuccess&&<h1 className='lg:text-2xl text-center text-xl pt-[20px]' >{registrationSuccess}</h1>}


            <div className="flex flex-col justify-center items-center border-2 border-warning rounded-lg lg:w-[30%] mx-auto py-[40px]">
                <form onSubmit={handleLogin}>
                    <div className="flex-col justify-center items-center">
                        <h1 className='text-xl mt-5'>Email</h1>
                        <input type="email" name='email' placeholder="Your Email" className="input w-full max-w-xs mt-2" />
                        <h1 className='text-xl mt-5'>password</h1>
                        <input type="password" name='password' placeholder="Your Password" className="input w-full max-w-xs mt-2" />
                    </div>
                    <input className='btn btn-warning w-[100%] mx-auto mt-5' type="submit" value="submit" />
                    <button onClick={handleSigninGoogle} className='btn btn-primary w-[100%] mx-auto mt-5'>Sign In With Google</button>
                </form>
                {loginError?<p>{loginError}</p>:''}
            </div>
            <div className="text-center">don't Have an account?<Link to='/register' className='text-blue-500'>register</Link></div>

        </div>
    );
};

export default Login;