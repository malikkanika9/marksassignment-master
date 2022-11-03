import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Formik } from "formik";
import Select from "react-select";
import { Part1Modal } from "./Modal/Part1Modal";
import { useDispatch, useSelector } from "react-redux";
import { AddResult, EditeResult } from "../Redux/actions/action";
import { useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import "./styles/styles.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

const FormModal = ({ edit, idx, data }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [list, setList] = useState("");
  const dispatch = useDispatch();
  const { result_part1 } = useSelector((state) => state.result_data);
 console.log(result_part1);
  const subject_selected = result_part1.map((subject) => subject.sub.value);
  console.log(subject_selected)
  useEffect(() => {
    let data = Option.filter((item) => !subject_selected.includes(item.value));
 console.log(data);
    setList(data);
 console.log(list)
  }, [result_part1]);

  return (
    <>
    <Button variant="light" onClick={handleShow} size="sm" className={edit ? null : "float-end m-2"}  >
      {edit ? <AiFillEdit /> : "Part-1"}
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
<Modal.Title>{edit ? "Edit Marks" : "Add Marks"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
<Formik
  initialValues={edit ? data : initialValues}
  validationSchema={Part1Modal}
  // console.log(onSubmit)

  onSubmit={(values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    // console.log(values);
    edit
 ? dispatch(EditeResult(values, idx))
 : dispatch(
     AddResult({ ...values, id: Math.random() + Date.now() })
   );
   
  setTimeout(() => {
 resetForm();
 setSubmitting(false);
 toast.success(`Marks  is successfully Added`, {
   position: "bottom-right",
 });
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
       options={list}
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
   {edit ? "Edit Marks" : "Add Marks"}
  
 </Button>
    </Form>
  )}
  
</Formik>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
    <ToastContainer />
  </>
  );
};

export default FormModal;
