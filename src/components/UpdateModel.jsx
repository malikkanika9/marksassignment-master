import { Part1Modal } from "./Modal/Part1Modal";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Formik } from "formik";
import Select from "react-select";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AddResult, EditeResult } from "../Redux/actions/action";
import { useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
export const UpdateModel=({ edit, idx, data,stuId })=>{
    console.log("stuId", stuId)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [updates, setUpdate] = useState("");
    const handleShow = () => setShow(true);
    const [list, setList] = useState("");
    const { token } = useSelector((state) => state.resultdata4.token);
    let Option = [
        { value: "English", label: "English" },
        { value: "Hindi", label: "Hindi" },
        { value: "Sanskrit", label: "Sanskrit" },
        { value: "Moral", label: "Moral" },
        { value: "Communication", label: "Communication" },
        { value: "G.K", label: "G.K." },
        { value: "EVS", label: "EVS" },
        { value: "Computer", label: "Computer" },
        { value: "Math", label: "Math" },
        { value: "Drawing", label: "Drawing" },
      ];
      const initialValues = {
        sub: "",
        FA_num: "",
        BA_num: "",
        Oral_num1: "",
        Oral_num2: "",
      };

      
return(

    <>
    <FaUserEdit onClick={handleShow}/>
     <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
<Modal.Title>Edit Marks </Modal.Title>
      </Modal.Header>
      <Modal.Body>
<Formik
  initialValues={ initialValues}
  validationSchema={Part1Modal}
  // console.log(onSubmit)

  onSubmit={(values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
  setTimeout(() => {
 setSubmitting(false);
 setUpdate(values)
 let payload = {
    sub: values.sub.label,
    fa_num: values.FA_num,
    ba_num:values.BA_num,
    oral_num1:values.Oral_num1,
    oral_num2:values.Oral_num2
  };

  const updateData=()=>{
    axios
    .put(`http://localhost:8000/api/student/update/${stuId}`,payload ,{
        headers: { Authorization: `Bearer ${token}` },
    })
    .then(function (response) {
        console.log('response data in formOne:-', response.data);
        // setData(response.data.data);
    })
    .catch((error) => {
        console.log(error);
    });
  }
  updateData();
  alert("data edit")
  resetForm();
     }, 500);
  }}
>
    
  {({
    values,
    errors,
    touched,
    setFieldValue,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  }) => (
    <Form onSubmit={handleSubmit}>
 
 <div className="form-group">
   <div className="drop-down">
     <Select
       options={Option}
       onChange={(option) => setFieldValue("sub", option)}
       name="sub"
       placeholder="Subject"
       value={values.sub}
       isDisabled={edit}
     />
     {touched.sub && errors.sub && (
       <span style={{color:"red"}}>{errors.sub}</span>
     ) } 
   </div>
 </div>
 <Form.Group>
   <Form.Label>FA</Form.Label>
   <Form.Control
     type="number"
     placeholder="FA"
     name="FA_num"
     onChange={handleChange}
     onBlur={handleBlur}
     value={values.FA_num}
   />
   {touched.FA_num && errors.FA_num && (
     <span style={{color:"red"}} >{errors.FA_num}</span>
   )}
 </Form.Group>
 <Form.Group>
   <Form.Label>Oral</Form.Label>
   <Form.Control
     type="number"
     placeholder="FA-Oral"
     name="Oral_num1"
     onChange={handleChange}
     onBlur={handleBlur}
     value={values.Oral_num1}
   />
   {touched.Oral_num1 && errors.Oral_num1 && (
     <span style={{color:"red"}} > {errors.Oral_num1}</span>
   )}
 </Form.Group>
 <Form.Group>
   <Form.Label>BA</Form.Label>
   <Form.Control
     type="number"
     name="BA_num"
     placeholder="BA"
     onChange={handleChange}
     onBlur={handleBlur}
     value={values.BA_num}
   />
   {touched.BA_num && errors.BA_num && (
     <span  style={{color:"red"}}>{errors.BA_num}</span>
   ) }
 </Form.Group>
 <Form.Group>
   <Form.Label>Oral</Form.Label>
   <Form.Control
     type="number"
     placeholder="BA-Oral"
     name="Oral_num2"
     onChange={handleChange}
     onBlur={handleBlur}
     value={values.Oral_num2}
   />
   {touched.Oral_num2 && errors.Oral_num2 ? (
     <span style={{color:"red"}} >{errors.Oral_num2}</span>
   ) : null}
 </Form.Group>
 <br />
 <Button
   variant="primary"
   type="submit"
   disabled={isSubmitting}

  
 >
   {"Add Marks"}
  
 </Button>
    </Form>
  )}
  
</Formik>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
    
    </>
)

}