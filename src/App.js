
import Tablecmpt from './components/Table';
import html2pdf from "html2pdf.js";
import {Button} from "react-bootstrap"
import {useRef} from "react"
import {Routes,Route} from "react-router-dom"
import {Login} from "./components/login"
import { Middle } from './components/Middle';

function App() {
  // const componentRef = useRef();
  // const generatePDF = () => {
  //   const source = document.getElementById("container");
  //   const fileName = "Marks.pdf";
  //   var opt = {
  //     margin: 0.1,
  //     filename: fileName,
  //     image: { type: "jpeg", quality: 0.98 },
  //     html2canvas: { scale: 8 },
  //     jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
  //   };
  //   html2pdf().set(opt).from(source).save();
  // };
  return (
    <div className="App" id="container">
       <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Middle" element={<Middle/>}></Route>
        <Route path="/Table" element={<Tablecmpt/>}></Route>
        
      </Routes>


     
    </div>
    
  );
}

export default App;
