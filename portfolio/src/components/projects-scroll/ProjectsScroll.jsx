import "./projects-scroll.css"
import { items } from "../../data/projects";
import { CarouselItem } from "../carousel/CarouselItem";

export const ProjectsScroll = () => {
    return (
        <div className="divProjectsScroll">
            {
                items.map(item => {
                    return <CarouselItem key={item.title} item={item} />
                })
            }
        </div>
    )
}
