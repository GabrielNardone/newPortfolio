import { Link } from "react-router-dom"
import "./carousel.css"



export const CarouselItem = ({ item }) => {
    return (
        <div className="carousel-item">
            <img src={item.img} alt={item.title} className="carousel-img" />
            <h2 className="carousel-title">{item.title}</h2>

            <div className="carousel-description">
                <p>{item.description}</p>
                <span>
                    <Link target={'_blank'} to={item.link} className="proyects-links">LINK TO SITE <i className="fa-solid fa-arrow-right"></i></Link>
                </span>
            </div>
        </div>
    )
}
