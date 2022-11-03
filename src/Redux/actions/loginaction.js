import axios from "axios"
export const TOKEN = "TOKEN";
export const LOGOUT = "LOGOUT"
export const token =(data)=>{
    return {
        type:TOKEN,
        payload:data
    } 
    
    }
    
    export const logger = (details)=> async(dispatch)=>{
        axios.post('http://localhost:8000/api/auth/login', details)
              .then(function (response) {
                console.log(response.data);
                dispatch(token(response.data))
              }).catch((error) => {
                console.log("kanikka",error);
                
            });
    
    }  
    export const logoutAction =()=>(dispatch)=>{
        localStorage.clear()
        dispatch({type:LOGOUT})
    }