import { NavLink } from "react-router-dom"
import { LogoCyfeer } from "../../const"

const LogoApp = () => {
    return (
        <NavLink to="/"><img className="w-[200px]" src={LogoCyfeer} /></NavLink>
    )
}

export default LogoApp