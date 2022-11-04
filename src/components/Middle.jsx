import React, { useState } from 'react';
import { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from "yup";
import {AiFillDelete} from "react-icons/ai"
import {FaUserEdit} from "react-icons/fa"
import {GrView} from "react-icons/gr"
import { Button, Form, Modal } from 'react-bootstrap'
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { MiddleData } from './MiddleData';
import axios from 'axios';
import { icons } from 'react-icons/lib';
import { UpdateModel } from './UpdateModel';

export const Middle=()=>{
    const [show, setShow] = useState(false);
    const [list, setList] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[data,setData]=useState([])
    const { token } = useSelector((state) => state.resultdata4.token);
    const[item,setItem]=useState([])
    const allData=()=>{
    axios
        .get(`http://localhost:8000/api/student/getstudent`,{
            headers: { Authorization: `Bearer ${token}` },
        })
        .then(function (response) {
            console.log('response data', response.data);
            setData(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });

    }
    
useEffect(()=>{
allData()

},[])

const deleteData=(stu_id)=>{
    fetch(`http://localhost:8000/api/student/${stu_id}`,{
        method:"DELETE",
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
        })
        alert("user deleted")
        allData()
    }

    
const viewData=(stu_id)=>{

    axios
    .get(`http://localhost:8000/api/student/getstudent/${stu_id}`,{
        headers: { Authorization: `Bearer ${token}` },
    })
    .then(function (response) {
        console.log('response ', response.data);
         setItem(response.data.data);
    })
    .catch((error) => {
        console.log(error);
    });

  handleShow()
}


return(
<>
<div style={{width:"100%", height:"80px",backgroundColor:"#395591", textAlign:"center", fontSize:"35px"}}>
{/* <Button onClick={allData} variant="light" style={{backgroundColor:"#395591", borderColor:"#395591", color:"white",fontSize:"25px"}}> Show All Students</Button> */}
<MiddleData/>
</div>

<div>

    <br />
<table  class="table">
<thead  style={{color:"#4b6cb7"}}>
<tr>
<td>#</td>
    <th  scope="col"> Student Name </th>
    <th  scope="col"> Section </th>
    <th  scope="col"> Roll Num  </th>
    <th  scope="col"> Class </th>
    <th  scope="col"> View  </th>
    <th  scope="col"> Delete </th>
    
</tr>

</thead>
<tbody>
      {data.map((el,i)=>(
        <tr>
	<td>{i + 1 < 10 ? `${i + 1}` : `${i + 1}`}</td>
	<td>{el.stuname}</td>
	<td>{el.section}</td>
	<td>{el.roll_num}</td>
    <td>{el.classs}</td>

  
    <td><GrView  onClick={()=>viewData(el.stu_id)
 
}
    
    /></td>
    <td><AiFillDelete onClick={()=>deleteData(el.stu_id)}/></td>
</tr>

      ))}

				</tbody>
</table>
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}      >
        <Modal.Header closeButton>
          <Modal.Title>Student Result Details</Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{width:"500px"}}>
        <table  class="table" >
<thead  style={{color:"#4b6cb7"}}>
<tr>
<th  scope="col"> Subject </th>
    <th  scope="col"> FA_num </th>
    <th  scope="col"> BA_num </th>
    <th  scope="col"> Oral_num1</th>
    <th  scope="col">Oral_num2  </th>
    <th>Edit</th>
   
    
</tr>

</thead>
<tbody>
      {item.map((el)=>(
        <tr>
  
	<td>{el.sub}</td>
	<td>{el.fa_num}</td>
	<td>{el.ba_num}</td>    
	<td>{el.oral_num1}</td>
    <td>{el.oral_num2}</td>
    
    {/* <td><FaUserEdit onClick={handleShow}/></td> */}
    
    <td><UpdateModel stuId={el.id}/> </td>
</tr>

      ))}

				</tbody>
</table>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
      {/* <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
<Modal.Title>Edit Marks </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UpdateModel/>
      </Modal.Body>

      
      <Modal.Footer></Modal.Footer>
    </Modal> */}
</div>
</>
)

}