
import Header from "./Header"
import Hero from "./hero"
import About from "./about"
import Project from "./project"
import Contact from "./contact"
import Footer from "./footer"
import Resume from "./Resume"


function Layout(){
    return(
        <div>
            <Header/>
                <section>
                    <Hero/>
                    <About/>
                    <Project/>
                    <Resume/>
                    <Contact/>
                </section>
            <Footer/>
        </div>
    )
}
export default Layout