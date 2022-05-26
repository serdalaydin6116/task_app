import React, { useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { logOut } from '../auth/firebase';
import {AuthContext} from "../context/AuthContext"

const Navbar = () => {
    const navigate = useNavigate();
    const {currentUser} = useContext(AuthContext)
   
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">


                <div className="d-flex text-white align-items-center">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item ">
                            <a class="nav-link" href="/about">Hakkımızda </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/activities">Etkinlikler</a>
                        </li>
                    </ul>
                </div>
                {/* <div className="d-flex text-white align-items-center">

                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/about" alt="about">Hakkımızda </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/activities">Etkinlikler</a>
                        </li>
                    </ul>
                </div> */}

                
                <div className="d-flex text-white align-items-center">
                {currentUser? (
                    <h5 className="mb-0 text-capitalize">
                        {currentUser?.displayName}
                    </h5>
                    
                ) : (
                    <button className="ms-2 btn btn-outline-light" onClick={()=> navigate("/login")}>Giriş Yap</button>
                    
                    )}

                {currentUser? (
                    <button className="ms-2 btn btn-outline-light" onClick ={()=>logOut()}>Çıkış Yap</button>
                ) : (
                    <button className="ms-2 btn btn-outline-light" onClick={()=> navigate("/register")}>Kayıt Ol</button>
                    )}
                </div>
            </div>
        </nav>
    </div>
  );
};

export default Navbar