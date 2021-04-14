import React, { useState } from 'react'
import { useForm } from "react-hook-form";
// import axios from "axios";
import classes from "./SignIn.module.css";
import "./SignIn.css";
import visibility from "../../assets/visibility.png";
import visibility_hide from "../../assets/visibility_hide.png";

const SignIn = () => {
    const { register, handleSubmit, formState: { errors: errorsLogin } } = useForm();
    const [signUp, setSignUp] = useState(false)
    const [show, setShow] = useState(false)
    const onSubmitLogin = data => {
        // const admin = {
        //     email: data.EmailLogin,
        //     password: data.PasswordLogin
        // }
        // axios.post('http://localhost:4000/login', admin)
        //     .then(res => {
        //         if (res.data.error) {
        //             alert(`Đăng nhập thất bại ! ${res.data.error}`)
        //         } else {
        //             setLogin(res.data.email)
        //             alert("Đăng nhập thành công !")
        //             console.log(res.data)
        //         }
        //     })
        //     .catch(err => console.log(err))
        console.log(data)
    }

    return (
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto background-img">
            <div className="card card0 border-0">
                <div className="row d-flex">
                    <div className="col-lg-6">
                        <div className="card1 pb-5">
                            
                            <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                                <img src="https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="define" className="image" />
                            </div>
                        </div>
                    </div>
                    {signUp ? <div>SignUp</div> : <div className="col-lg-6">
                        <div className="card2 card border-0 px-4 py-5">
                            <div className="row px-3 mb-4 justify-content-center">
                                <h3 className="text">Sign In</h3>
                            </div>
                            <form onSubmit={handleSubmit(onSubmitLogin)}>
                                <div className="row px-3 ">

                                    <label className="mb-1">
                                        <h6 className="mb-10 text-sm">Email Address</h6>
                                    </label>
                                    <input type="text" placeholder="Email" name="EmailLogin"
                                        ref={register({ required: "Vui lòng nhập email !", pattern: { value: /[^@ \t\r\n]+@[^@ \t\r\n]+\..[^@ \t\r\n]+/i, message: "Vui lòng nhập đúng định dạng !" } })} />
                                    {errorsLogin.EmailLogin && <p className={classes.error}>{errorsLogin.EmailLogin.message}</p>}
                                </div>
                                <div className="row px-3">
                                    <label className="mb-1">
                                        <h6 className="mt-10 mb-10 text-sm">Password</h6>
                                    </label>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <input type={show ? "text" : "password"} placeholder="Password" name="PasswordLogin" maxLength="10"
                                        ref={register({ required: "Vui lòng nhập password ! ", minLength: { value: 6, message: "Ít nhất 6 ký tự !" }, pattern: { value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/i, message: "Password gồm các ký tự [a-z] , [0-9] , [#?!@$ %^&*-]" } })} />
                                    <span onClick={() => setShow(!show)} className={classes.showPassword}>
                                        {show ? <img src={visibility} alt="show" /> : <img src={visibility_hide} alt="hide" />}
                                    </span>
                                </div>
                                {errorsLogin.PasswordLogin && <p className={classes.error}>{errorsLogin.PasswordLogin.message}</p>}
                                <div className="row px-3 mb-4">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input id="chk1" type="checkbox" name="chk" className="custom-control-input" />
                                        <label htmlFor="chk1" className="custom-control-label text-sm">Remember me</label>
                                    </div>
                                    <p className="ml-auto mb-0 text-sm">Forgot Password?</p>
                                </div>
                                <div className="row mb-3 px-3">
                                    <button type="submit" className="btn text-center container-fluid btnSign">Login</button>
                                </div>
                                <div className="row mb-4 px-3 justify-content-center ">
                                    <small className="font-weight-bold mr-10">Don't have an account ?
                                    <span className="text-danger" onClick={() => setSignUp(true)}> Register</span>
                                    </small>
                                </div>
                            </form>
                        </div>
                    </div>}
                </div>

            </div>
        </div>
    )
}

export default SignIn
