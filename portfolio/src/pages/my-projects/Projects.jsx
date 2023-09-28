import { Carousel } from "../../components/carousel/Carousel"
import { Column } from "../../components/column/Column";
import { ProjectsScroll } from "../../components/projects-scroll/ProjectsScroll";
import "./projects.css"


export const Projects = () => {
  return (
    <div className="divProjects animate__animated animate__fadeIn animate__faster">
      <ProjectsScroll/>
    </div>
  )
}
