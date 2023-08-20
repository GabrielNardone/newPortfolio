import { useState } from "react"
import { CarouselItem } from "./CarouselItem"
import "./carousel.css"
import { items } from "../../data/projects";



export const Carousel = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0
        } else if (newIndex >= items.length) {
            newIndex = items.length - 1
        }

        setActiveIndex(newIndex)
    }

    return (
        <div className="carousel">

            <div className="inner"
                style={{ transform: `translate(-${activeIndex * 100}%)` }}
            >

                {
                    items.map(item => {
                        return <CarouselItem key={item.title} item={item} />
                    })
                }

            </div>

            <div className="div-buttons">
                <button className="carousel-arrow" onClick={() => updateIndex(activeIndex - 1)}>
                    <i className="fa-solid fa-circle-chevron-left"></i>
                </button>

                <div className="dots">
                    {
                        items.map((item, index) =>
                            <button key={index} onClick={() => {updateIndex(index)}}>
                                <i 
                                className={`fa-solid fa-circle ${index===activeIndex && "active-symbol" }`}
                                ></i>
                            </button>
                        )
                    }
                </div>

                <button className="carousel-arrow" onClick={() => updateIndex(activeIndex + 1)}>
                    <i className="fa-solid fa-circle-chevron-right"></i>
                </button>
            </div>

        </div>
    )
}
