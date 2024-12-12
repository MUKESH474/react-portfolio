import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Hero from "./hero";
import About from "./about";
import Project from "./project";

function Router1(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    < Route  index element={<Hero/>} />
                    < Route path="/about" element={<About/>} />
                    <Route path="/pro" element={<Project/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router1