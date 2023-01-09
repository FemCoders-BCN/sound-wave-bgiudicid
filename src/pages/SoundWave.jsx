import Nav from "../components/Nav"
//import Button from "../components/Button"
import BodyOne from "../components/BodyOne"
import { Outlet, Link } from "react-router-dom";

export default function Home(){
    return(
        <>
        <div>
            <Nav/>   
            <BodyOne/>
            <Link className="join-now" to ="/join">Join Now</Link>
            <div>
                <div className="circle2"></div>
            </div>
            <div>
                <div className="circle3"></div>
            </div>
        </div>

        <Outlet/>
    </>
)
}

