import React, { useState } from 'react'
import { useForm } from "react-hook-form";
// import axios from "axios";
import classes from "./SignUp.module.css";
import "./SignUp.css";
import visibility from "../../assets/visibility.png";
import visibility_hide from "../../assets/visibility_hide.png";
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors: errorsLogin } } = useForm();
    const [show, setShow] = useState(false)
    const [showAgain, setShowAgain] = useState(false)
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


        if(data.passwordLogin !== data.passwordLoginAgain){
            alert("Mật khẩu chưa trùng khớp")
        }
        else{
            console.log(data)
        }
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
                    <div className="col-lg-6">
                        <div className="card2 card border-0 px-4 py-1">
                            <div className="row px-3 mb-4 justify-content-center">
                                <h3 className="text">Đăng ký</h3>
                            </div>
                            <form onSubmit={handleSubmit(onSubmitLogin)}>
                                <div className="row px-3 tab">
                                    <input type="text" placeholder="Họ Tên (*)" name="name"
                                        ref={register({ required: "Vui lòng nhập họ tên !" })} />
                                    {/* {errorsLogin.name && <p className={classes.error}>{errorsLogin.name.message}</p>} */}
                                </div>
                                <div className="row px-3 tab">
                                    <input type="text" placeholder="Tên Đăng Nhập (*)" name="nameLogin"
                                        ref={register({ required: "Vui lòng nhập tên đăng nhập !" })} />
                                    {/* , pattern: { value: /[^@ \t\r\n]+@[^@ \t\r\n]+\..[^@ \t\r\n]+/i, message: "Vui lòng nhập đúng định dạng !" } */}
                                    {/* {errorsLogin.nameLogin && <p className={classes.error}>{errorsLogin.nameLogin.message}</p>} */}
                                </div>
                                <div style={{ display: 'flex', marginBottom: 10 }}>
                                    <input type={show ? "text" : "password"} placeholder="Mật Khẩu (*)" name="passwordLogin" maxLength="10"
                                        ref={register({ required: "Vui lòng nhập mật khẩu ! ", minLength: { value: 6, message: "Ít nhất 6 ký tự !" }, pattern: { value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/i, message: "Password gồm các ký tự [a-z] , [0-9] , [#?!@$ %^&*-]" } })} />
                                    <span onClick={() => setShow(!show)} className={classes.showPassword}>
                                        {show ? <img src={visibility} alt="show" /> : <img src={visibility_hide} alt="hide" />}
                                    </span>
                                </div>
                                {/* {errorsLogin.passwordLogin && <p className={classes.error}>{errorsLogin.passwordLogin.message}</p>} */}
                                <div style={{ display: 'flex', marginBottom: 10 }}>
                                    <input type={showAgain ? "text" : "password"} placeholder="Nhập Lại Mật Khẩu (*)" name="passwordLoginAgain" maxLength="10"
                                        ref={register({ required: "Vui lòng nhập lại mật khẩu ! ", minLength: { value: 6, message: "Ít nhất 6 ký tự !" }, pattern: { value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/i, message: "Password gồm các ký tự [a-z] , [0-9] , [#?!@$ %^&*-]" } })} />
                                    <span onClick={() => setShowAgain(!showAgain)} className={classes.showPassword}>
                                        {showAgain ? <img src={visibility} alt="show" /> : <img src={visibility_hide} alt="hide" />}
                                    </span>
                                </div>
                                {/* {errorsLogin.passwordLoginAgain && <p className={classes.error}>{errorsLogin.passwordLoginAgain.message}</p>} */}
                                <div className="row px-3 tab">
                                    <input type="text" placeholder="Mã Giới Thiệu" name="code" maxLength="10"
                                        ref={register()} />
                                </div>
                                <div className="row tab2">
                                    <div className="col-lg-6">
                                        <select className="form-control" name="nation" ref={register({ required: true })}>
                                            <option value="" >Quốc Gia (*)</option>
                                            <option value="VietNam" >Việt Nam</option>
                                            <option value="America" >America</option>
                                            <option value="England" >England</option>
                                            <option value="France" >France</option>
                                            <option value="Singapore" >Singapore</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6">
                                        <select className="form-control" name="nationCountry" ref={register({ required: true })}>
                                            <option value="" >Tỉnh / Thành Phố (*)</option>
                                            <option value="America" >America</option>
                                            <option value="England" >England</option>
                                            <option value="France" >France</option>
                                            <option value="Singapore" >Singapore</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row px-3 mt-10 mb-2 tab">
                                    <div>
                                        <input type="checkbox" className="checkBox" name="checkCS" ref={register({ required: true })} />
                                        <label className="text-sm">Khi đăng ký bạn đã đồng ý với <Link to="/" className="DKSD">Điều khoản sử dụng và chính sách</Link> của IBG USA LLC</label>
                                    </div>
                                </div>
                                <div className="row mb-3 px-3">
                                    <button type="submit" className="btn text-center container-fluid btnSign">Login</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignUp
