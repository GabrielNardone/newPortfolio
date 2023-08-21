import { Selfie } from "../../components/selfie/Selfie"
import "./about-me.css"


export const AboutMe = () => {
  return (
    <div className="divAboutMe">
      
      <h2> G.N. Software Developer</h2>
      <div>
        <p className="p1">Good to have you here mi amigo <i className="fa-regular fa-face-smile-wink"></i>. I´m Gabriel, I´m from Argentina and I can do some tech jobs for you.
          Currently improving my skills at Digital House more and more, I have learned the entire software developer cycle,
          from the first ideas drawn in a digital wireframe to the deployment of a website or any software tool in a cloud service.
          I also have a degree in philosophy and that's where my background in logical and abstract thinking comes from but that's another story.
        </p>

        <section>
          <p className="p2">
            My main stack is React and the whole group around it [javascript, typescrip, node.js, packages, ...].
            I really like everything that has to do with UX/UI, I don't lack creativity and innovation.
            Finally, I have great ambitions that I hope to achieve by working together.
          </p>

          <Selfie/>
        </section>
      </div>
    </div>
  )
}
