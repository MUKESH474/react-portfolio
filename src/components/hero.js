import img1 from '../pic/hero.png'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import About from './about';


function Hero(){
    return(
        <div className="container-fluid" id='hero'>
            <div className="row herocont">
                <div className="col-6 mt-sm-auto m-md-auto   ">
                    <h1 className='herotext'>Hi, <br/> Im <span className='heronam'> Mukesh Kumar</span> <br/> <span className='reax'>React developer</span> </h1>
                    <ul className='icons '>
                        <li className='iconlinkedin ' > <Link to={'https://www.linkedin.com/in/mukesh-kumar-m74/'} className='iconlinkedin' target='blank'> <FaLinkedin/></Link> </li>
                        <li  className='icongithub'> <Link to={"https://github.com/MUKESH474"} className='icongithub'  target='blank'> <FaGithub/></Link></li>
                        <li className='iconinsta' > <Link to={"https://github.com/MUKESH474"}  className='iconinsta'  target='blank'><FaInstagram/></Link> </li>
                    </ul>
                    
                </div>
                <div className="col-6">
                    <img src={img1}  className='heroimgage  img-fluid  mt-md-5 mt-sm-5 '/>
                </div>
                <hr/>
            </div>
            
        </div>
    )
}
export default Hero