import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { signOut } from "firebase/auth";

const Navbar = () => {
    const { user,auth,setUser } = useContext(AuthContext)

    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser(null)
          }).catch((error) => {
            // An error happened.
          });
    }

    return (
        <div>
            <div className="mt-2 navbar bg-base-200 font-nunito rounded-lg text-lg" data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">


                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='alltoys'>All Products</Link></li>
                            {user && <li><Link to='mytoys'>My Products</Link></li>}
                            {user && <li><Link to='addatoy'>Add a Product</Link></li>}
                            <li><Link to='Blogs'>Blogs</Link></li>

                        </ul>
                    </div>
                    <Link to='/'><img src='game_king_logo.png' className="w-[100px] h-[100px]"></img></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">


                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='alltoys'>All Products</Link></li>
                        {user && <li><Link to='mytoys'>My Producs</Link></li>}
                        {user && <li><Link to='addatoy'>Add a Product</Link></li>}
                        <li><Link to='Blogs'>Blogs</Link></li>


                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.photoURL ?<div className="tooltip tooltip-bottom mr-10" data-tip={user.displayName}> <img className="h-[80px] w-[80px] " src={user.photoURL}></img></div> : user? <div className="tooltip tooltip-bottom mr-10" data-tip={user.displayName}> <img className="h-[50px] w-[50px] " src='https://th.bing.com/th/id/R.aee6adef085a77dfa4708f3fd4a1ffb5?rik=nj%2buNqgLIJU0JQ&pid=ImgRaw&r=0'></img></div>:''}
                    {user?<button onClick={handleSignOut} className="btn btn-warning">LogOut</button>:<Link to='register'><button className="btn btn-warning mr-5">Register</button></Link>}
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;