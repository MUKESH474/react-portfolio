import Button from "react-bootstrap/esm/Button"
import img1 from "../pic/resume.jpg"
import { Link } from "react-router-dom"
import res from '../pic/res.pdf'

function Resume(){
    return(
        <div className="container-fluid">
            <div className="row ">
                    <h4 className="mt-5" >Resume</h4>
                <div className="col-12">
                    <img src={img1} className="resimg img-fluid" />
                </div>
                <div className="col-12 restext ">
                    <p  style={{fontSize:"20px", marginBottom:"20px"}} > You can View my  <a href={res} target="blank" className="reslnk" > Resume</a>  </p>
                </div>
            </div>
        </div>
    )
}
export default Resume