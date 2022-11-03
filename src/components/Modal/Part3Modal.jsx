import * as Yup from "yup";

export const Part3Modal = Yup.object({
    term:Yup.object().required("Please Select Term"),
    working:Yup.number().positive().integer().min(0,"Days Required")
    .max(83, "Maximum value 83")
    .required(" Please enter Days from 0 to 83"),
    present:Yup.number().positive().integer().min(0,"Days Required")
    .max(83, "Maximum value 83")
    .required(" Please enter Days from 0 to 83")
    .max(Yup.ref("working"), `Present Days Cannot be greater than working days`)
})