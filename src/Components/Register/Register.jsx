
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { signInWithPopup, createUserWithEmailAndPassword,updateProfile,signOut } from "firebase/auth";
import useTitle from "../UseTitle/UseTitle";








const Register = () => {
    window.scroll(0,0)
    useTitle('register')
    const Googleprovider = new GoogleAuthProvider();
    const navigate=useNavigate()

    const { auth,setRegisterError,registerError,setUser,SetRegistrationSuccess } = useContext(AuthContext)

    const handleSigninGoogle = (event) => {
        event.preventDefault()
        signInWithPopup(auth, Googleprovider)
            .then((result) => {
                const user = result.user;
                setRegisterError(null)
                setUser(user)
                navigate('/')
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                setRegisterError(errorMessage)
            });
    }

    const HandleSigningWithEmail = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const password = form.password.value
        const email = form.email.value
        const photo=form.photo.value


        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                setRegisterError(null)
                console.log(user)
                SetRegistrationSuccess('successfully registered please log in')

                signOut(auth).then(() => {
                    // Sign-out successful.
                    setUser(null)
                  }).catch((error) => {
                    // An error happened.
                  });
                

                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                  }).then(() => {
                    // Profile updated!
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
                  navigate('/login')

                  

            })  .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setRegisterError(errorMessage)


            });

    }





    return (
        <div className="hero min-h-screen bg-base-200 mt-[20px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:w-[50%] lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                    <p className="py-6">Register now and join our fun and unique experience in the world of gaming merchandise</p>
                </div>
                <form onSubmit={HandleSigningWithEmail}>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input required type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input required type="text" name='photo' placeholder="photo" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <p>Already got an id?<Link to='/login' className="text-orange-400">Login</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>

                            <div className="form-control mt-6">
                                <button onClick={handleSigninGoogle} className="btn btn-warning">Sign in With Google</button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        {registerError? `${registerError}`:''}
                    </div>
              
                </form>
          
            </div>
            
        </div>
    );
};

export default Register;