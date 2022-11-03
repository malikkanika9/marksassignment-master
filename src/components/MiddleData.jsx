import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useFormik } from "formik";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
export const MiddleData = () => {
    const [show, setShow] = useState(false);
    const [list, setList] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
     const Part2Modal = Yup.object({
      classs:  Yup.number()
        .positive()
        .integer()
        .min(1, "Minimal value 1")
        .max(12, "Maximum value 12")
        .required(" Please enter class from 1 to 12"),
        roll_num:  Yup.number()
        .positive()
        .integer()
        .min(1, "Minimal value 1")
        .max(20, "Maximum value 20")
        .required(" Please enter class from 1 to 20"),
        section: Yup.object().required("Please Select section"),
        stuName: Yup.string().required()

      });
    const initialValues = {
        stuName: "",
        section: "",
        classs: "",
        roll_num: "",
      };
      const options = [
        { value: "a", label:"A" },
        { value: "b", label: "B" },
        { value: "c", label: "C" },
      ];
    const navigate=useNavigate()
  const [field, setField] = useState("");
  
 
  const {
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    setFieldValue,
    touched,
  } = useFormik({
    initialValues: initialValues,
    validationSchema:Part2Modal,
    onSubmit: (values, action) => {
        console.log("values", values);
      setField(values);
    
    },
  });
 const redirect=()=>{
    handleClose()
    navigate("/Table",{
        state:{
            field
        }
      })
      
 }
  return (<>
    <Button   onClick={handleShow} style={{backgroundColor:"#395591", border:"#395591", marginTop:'10px', fontSize:"30px"}}>   ADD STUDENT DATA
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD DATA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Student Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Student Name"
      
          name="stuName"
          value={values.stuName}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Student Class</Form.Label>
        <Form.Control
          type="number"
          max={12}
          placeholder="Enter Student Class"
          name="classs"
          value={values.classs}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Choose Section</Form.Label>
        <Select
          options={options}
          name="section"
          value={values.section}
          onChange={(option) => setFieldValue("section", option)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Roll Number</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Student Roll Number"
          name="roll_num"
          max={100}
          min={1}
          value={values.roll_num}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
        />
      </Form.Group>
      <Button type="submit" >Submit</Button>
      {/* <Tablecmpt studenName={values.stuName} sec={values.section} clas={values.class} rolno={values.roll_num}/> */}
    </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={redirect}>
            Save Changes
          </Button>
      </Modal.Footer>
      </Modal>
    
    </>
  );
};
