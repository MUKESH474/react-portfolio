import { Link } from 'react-router-dom';
import p1 from '../pic/p1.png'
import p2 from '../pic/p2.png'
import p3 from '../pic/p3.png'
import p4 from '../pic/p4.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Project(){
    return(
        <div className="container-fluid">
            <div className="row projecthead " id="pro"> 
            <h1>Projects</h1>
                <div className=" row-cols-sm-1 row-cols-lg-3 row-cols-md-2 projectcard ">
                <Card style={{ width: '18rem' }}  className='cardp1'>
                    <Card.Img variant="top" src={p1} />
                    <Card.Body>
                        <Card.Title className='cardtext'>Flipkart</Card.Title>
                        <Button variant="info"><Link to={"https://flipkart-react-project-delta.vercel.app/"} target='blank'className='prolink' >Visit </Link></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}  className='cardp1'>
                    <Card.Img variant="top" src={p2} />
                    <Card.Body>
                        <Card.Title className='cardtext'>Movie Mart</Card.Title>
                        <Button variant="info"><Link to={"https://movie-mart-two.vercel.app/"} target='blank' className='prolink'>Visit</Link></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}  className='cardp1'>
                    <Card.Img variant="top" src={p3} />
                    <Card.Body>
                        <Card.Title className='cardtext'>Euroland</Card.Title>
                        <Button variant="info"><Link to={"https://mukeshkumar-euroland.netlify.app/"} target='blank ' className='prolink'>Visit</Link></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height:'14rem' }}  className='cardp1'>
                    <Card.Img variant=" top" src={p4}  />
                    <Card.Body>
                        <Card.Title className='cardtext'>Spices</Card.Title>
                        <Button variant="info"><Link to={"https://mukeshkumar-spices.netlify.app/"} target='blank' className='prolink'>Visit</Link></Button>
                    </Card.Body>
                </Card>
                </div>
            </div>
            
        </div>
    )
}
export default Project