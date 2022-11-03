import { Row,Col } from "react-bootstrap";
import React from "react";
import FormModal from "./FormModal";
import { AiOutlineDelete } from "react-icons/ai";
import { RemoveResult } from "../Redux/actions/action";
import "./styles/styles.css"
import { useDispatch, useSelector } from "react-redux";
const Part1 = () => {
  let  sum=(data)=>{
    let totalSum = 0;
  for(let i=0; i<data.length; i++){
    totalSum+=(data[i].Oral_num2+data[i].BA_num+data[i].FA_num+data[i].Oral_num1)
  }
    return totalSum
  }

let  percentage=(data)=>{
    let totalNumber = data.filter((item)=> item.name !== "Drawing").length * 100 || 0
    // console.log(totalNumber)
    return (((sum(data)*100)/totalNumber).toFixed(2)) 
  
  }
  const { result_part1 } = useSelector((state) => state.result_data);
  const dispatch = useDispatch();
  const handleDelte = (id) => {
    dispatch(RemoveResult(id));
  };
 

  return (
    <>
    <Col
      md={7}
      sm={12}
      xs={12}
      className="border-end border-secondary border-1"
    >
      <Row className="border-bottom border-secondary">
        <Col className="text-center text-primary fw-bold">
          Part-I : Scholastic Areas
          <FormModal />
        </Col>
      </Row>

      <Row className="border-bottom border-secondary  heading-height">
        <Col
          className="text-center border-end border-secondary paddingZero fw-bold"
          md={1}
          sm={1}
          xs={1}
        >
          Sl No
        </Col>
        <Col
          md={3}
          sm={3}
          xs={5}
          className="border-end border-secondary fw-bold d-flex align-items-center justify-content-center"
        >
          {" "}
          SUBJECT
        </Col>

        <Col md={8} sm={8} xs={6}>
          <Row>
            <Col
              md={2}
              xs={2}
              sm={2}
              className="paddingZero text-center border-end border-secondary paddingZero fw-bold p-0"
            >
              FA
            </Col>
            <Col
              md={2}
              xs={2}
              sm={2}
              className="text-center border-end border-secondary paddingZero p-0  fw-bold fntSize"
            >
              Oral
            </Col>
            <Col
              md={2}
              xs={2}
              sm={2}
              className="text-center border-end border-secondary paddingZero fw-bold p-0"
            >
              BA
            </Col>
            <Col
              md={2}
              xs={2}
              sm={2}
              className="text-center border-end  border-secondary paddingZero fw-bold p-0"
            >
              Oral
            </Col>
            <Col md={4} sm={4} xs={4} className="text-center  fw-bold  p-0">
              Total Marks
            </Col>
          </Row>
          <Row>
            <Col
              md={2}
              xs={2}
              sm={2}
              className="text-center border-end border-top border-secondary p-0 fw-bold paddingZero"
            >
              40
            </Col>
            <Col
              md={2}
              xs={2}
              sm={2}
              className="text-center border-end border-top border-secondary p-0 fw-bold paddingZero"
            >
              10
            </Col>
            <Col
              md={2}
              xs={2}
              sm={2}
              className="text-center border-end border-top border-secondary p-0 fw-bold paddingZero"
            >
              40
            </Col>
            <Col
              md={2}
              xs={2}
              sm={2}
              className="text-center border-top border-end border-secondary p-0 fw-bold paddingZero"
            >
              10
            </Col>
            <Col
              md={4}
              sm={4}
              xs={4}
              className="text-center border-top border-secondary p-0 fw-bold paddingZero"
            >
              100
            </Col>
          </Row>
        </Col>
      </Row>

      {result_part1.map((item, i) => (
        <Row
          key={Date.now() + Math.random()}
          className="border-bottom border-secondary"
        >
          <Col
            md={1}
            sm={1}
            xs={1}
            className="text-center border-end border-secondary paddingZero fw-bold"
          >
            {i + 1 < 10 ? `0${i + 1}` : `${i + 1}`}
          </Col>
          <Col
            md={3}
            sm={3}
            xs={5}
            className=" border-end border-secondary fw-bold"
          >
            {item.sub.value}{" "}
          </Col>
          <Col md={8} sm={8} xs={6}>
            <Row>
              <Col
                md={2}
                xs={2}
                sm={2}
                className="text-center border-end border-secondary p-0 fw-bold  paddingZero "
              >
                {item.FA_num}
              </Col>
              <Col
                md={2}
                xs={2}
                sm={2}
                className="text-center border-end border-secondary p-0 fw-bold paddingZero"
              >
                {item.Oral_num1}
              </Col>
              <Col
                md={2}
                xs={2}
                sm={2}
                className="text-center border-end border-secondary p-0 fw-bold paddingZero"
              >
                {item.BA_num}
              </Col>

              <Col
                md={2}
                xs={2}
                sm={2}
                className="text-center  border-end border-secondary p-0 fw-bold  paddingZero"
              >
                {item.Oral_num2}
              </Col>
              <Col
                md={4}
                xs={4}
                sm={4}
                className="text-center  fw-bold "
              >
              &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;   {item.FA_num + item.Oral_num1 + item.BA_num + item.Oral_num2}
            
                <span
                  style={{ }}
                  onClick={() => handleDelte(item.id)}
                  className="float-end"
                  
                >
                  <AiOutlineDelete  className="red"/>
                </span>
                <span  className="float-end">
                
                  <FormModal idx={i} edit={true} data={item} />
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      ))}

      <Row className="border-bottom border-secondary">
        <Col md={1} sm={1} xs={1}></Col>
        <Col
          md={3}
          sm={3}
          xs={5}
          className="border-end border-secondary fw-bold"
        >
          GRAND TOTAL
        </Col>
        <Col md={8} sm={8} xs={6} className="text-end">
          <Row>
            <Col xs={{ span: 4, offset: 8 }} className="text-center fw-bold">
            {sum(result_part1)||0}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="border-bottom border-secondary">
        <Col md={1} sm={1} xs={1}></Col>
        <Col
          md={3}
          sm={3}
          xs={5}
          className="border-end border-secondary fw-bold"
        >
          PERCENTAGE
        </Col>
        <Col md={8} sm={8} xs={6} className="text-end">
          <Row>
            <Col xs={{ span: 4, offset: 8 }}  className="text-center fw-bold p-0">
              {/* {((sumToatal*100)/(result_part1.length*100)).toFixed(2)} */}
              {percentage(result_part1)||0}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="borderSmallScreen">
        <Col md={1} sm={1} xs={1}></Col>
        <Col
          md={3}
          sm={3}
          xs={5}
          className="border-end border-secondary fw-bold"
        >
          RANK
        </Col>
        <Col md={8} sm={8} xs={6} className="text-end">
          <Row>
            <Col
              xs={{ span: 4, offset: 8 }}
              className="text-center fw-bold p-0"
            >
              V
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  </>
  );
};

export default Part1;