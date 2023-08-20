import { NavLink } from "react-router-dom"
import "./link.css"

export const Link = ({props}) => {
    return (
        <div className="divLinks">
            <i className={props.icon}></i>
            <NavLink to={props.path} className={({ isActive }) => isActive ? "active" : ""}>{props.name}</NavLink>
        </div>
    )
}
