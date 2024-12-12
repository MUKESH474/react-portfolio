import img1 from '../pic/about.png'

function About(){
    return(
        <div className="container-fluid" id="about"> 
            <div className="row abouthead">
                <div className="col-5">
                    <img  src={img1} className='aboutimage img-fluid' />
                </div>
                <div className="col-7 mt-2  aboutmeabo">
                    <h2>About Me</h2>
                    <p>Hi, My name is Mukesh Kumar. Frontend Developer with  foundation in React.js and a love for crafting seamless user experiences. I hold a B.E. in Computer Science and Engineering with a CGPA of 7.79 from University College of Engineering, BIT Campus Tiruchirappalli. I had completed Frontend Development in BESANT TECHNOLOGY CHENNAI. </p>
                </div>
            <hr/>
            </div>
        </div>
    )
}
export default About; 