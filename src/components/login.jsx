import "./login.css" 
import { Formik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logger} from "../Redux/actions/loginaction";
import {  useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Login =()=>{
    const schema = Yup.object().shape({
        username: Yup.string()
               .strict(),
     password: Yup.string()
        .strict()
          .required("Password is a required ")
          .min(8, "Password must be at least 8 characters"),
    });

        const navigate=useNavigate()
        const dispatch = useDispatch();
        
const {token} = useSelector((store) => store.resultdata4.token);
        console.log("t" ,token);
        useEffect(()=>{
if(token){
    navigate("/Middle")
}
        },[token])
       
    return(
        <>
         <ToastContainer />
      <Formik
        validationSchema={schema}
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          console.log(values)
          dispatch(logger(values));
         
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
              handleBlur,
      
        }) => (
          <div className="login">
            <div className="form">
              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter username "
                  className="form-control inp_text"
                  id="email"
                />
             <p className="error">
                  {errors.username && touched.username && errors.username}
                  
                </p>
             <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
    
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                
                <button type="submit"  onClick={handleSubmit}>Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
  
    </>
    )
}