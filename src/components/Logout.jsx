import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { logger } from "../redux/Action";
import { ApiiContext } from "../context/Apicontext";
const { thirdDataRemove ,secondDataremove} = useContext(ApiiContext);
 export const logout = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch();
    const {token} = useSelector((store) => store.resultdata4.token);
    console.log(token);
    useEffect(()=>{
        localStorage.removeItem('token');
 
        secondDataremove()
if(!token){
navigate("/")
}
    },[token])

   

   return (
      <>
     
      </>
   );
};