import { combineReducers } from "redux";
import { part2Reducer } from "./Part2Reducer";
import { resultReducer } from "./reducer";
import { part3Reducer } from "./Part3Reducer";
import {loginreducer} from "./loginReducer"


export const reducers = combineReducers({
    result_data:resultReducer,
    result_data2:part2Reducer,
    result_data3:part3Reducer,
    resultdata4: loginreducer,
    
})