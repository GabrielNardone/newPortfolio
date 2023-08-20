import { Outlet } from "react-router-dom"
import { Logo } from "../components/logo/Logo"
import data from "../data/nav-links.json";
import { Link } from "../components/links/Link";
import { Fire } from '../components/fire/Fire'
import { Header } from "../components/header/Header";
import { useEffect, useState } from "react";


export const Layout = () => {

    const [navBarWidth, setNavBarWidth] = useState(false)

    const handleNavBarWidth = () => {
        setNavBarWidth(!navBarWidth)
    }

    useEffect(() => {
        const handleCloseNavBar = () => { setNavBarWidth(false) }
        document.addEventListener("mousedown", handleCloseNavBar)
    })


    return (
        <div className="layout">


            <section className={`navSection ${navBarWidth && "active"}`}>

                <Logo />

                <nav>
                    {data.map((elem, index) => <Link key={index} props={elem} />)}
                </nav>

                <Fire />

            </section>

            <div className="outlet">
                <Header handleNavBarWidth={handleNavBarWidth} />
                <Outlet />
            </div>

        </div>
    )
}
