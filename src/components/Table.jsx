import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { logoutAction } from '../Redux/actions/loginaction';
import { Container, Row, Button, Col } from 'react-bootstrap';
import Part2 from './Part2';
import Part1 from './Part1';
import Part3 from './Part3';

const Tablecmpt = () => {
	const navigate = useNavigate();
	const state = useLocation();
	const { result_part1 } = useSelector((state) => state.result_data);
	const { result_part2 } = useSelector((state) => state.result_data2);
	console.log('rrr', result_part1, result_part2);
	console.log('st', state);
	const { token } = useSelector((state) => state.resultdata4.token);
	console.log(token);
	const dispatch = useDispatch();
	const [post, setPost] = useState('');

	const logout = () => {
		dispatch(logoutAction());
		navigate('/');
	};
	
	const handleSend = () => {
		let obj = {};

		console.log(result_part1);
		let result_part11 = {};
		for (var i = 0; i < result_part1.length; i++) {
			console.log('res', result_part1[i]);
			result_part1[i].sub = result_part1[i].sub.value;
		}
		if (state.state.field.section.label) {
			state.state.field.section = state.state.field.section.label;
		}

		obj['result_part1'] = result_part1;
		obj['studentInfo'] = state.state.field;
			handleSubmission(obj);
	};
	console.log('fff', state.state.field.section.value);
	const handleSubmission = (payload) => {
		axios
			.post(`http://localhost:8000/api/student/details`, payload, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then(function (response) {
				console.log('response data in formOne:-', response.data);
				// setData(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
			alert("data saved")
	};
	console.log(post);

	return (
		<>
			<table class="table">
				<thead style={{color:"#4b6cb7"}}>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Class</th>
						<th scope="col">Section</th>
						<th scope="col">RollNo</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{state.state.field.stuName}</td>
						<td>{state.state.field.classs}</td>
						<td>{state.state.field.section.value}</td>
						<td>{state.state.field.roll_num}</td>
					</tr>
				</tbody>
			</table>
			<Container className="border border-secondary border-3 ">
				<Row className="border-bottom border-secondary border-1 ">
					<Button style={{ justifyContent: 'right', backgroundColor: '#4b6cb7 ' }} onClick={logout}>
						logout
					</Button>
					<Col className="text-center ">
						<p className=" fs-3 fw-3  text-center pt-1 text-danger fw-bold">First Terminal Examination 2018-2019</p>
					</Col>
				</Row>
				<Row className="border-bottom border-secondary border-1">
					<Col className="text-center">
						<p className="fs-4 fw-bold "> ACADEMIC PERFORMANCE</p>
					</Col>
				</Row>

				<Row>
					<Col>
						<Row className="border-bottom border-secondary border-1">
							<Part1 />
							<Part2 />
						</Row>
					</Col>
				</Row>
				<Part3 />
			</Container>
			<br />
			{result_part1.length >= 2 ? (
				<Button style={{ marginLeft: '550px' }} onClick={handleSend}>
					Save
				</Button>
			) : (
				''
			)}
		</>
	);
};

export default Tablecmpt;
