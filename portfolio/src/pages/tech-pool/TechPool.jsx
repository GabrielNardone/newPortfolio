import "./tech-pool.css"

export const TechPool = () => {
  return (
    <div className='divTechPool animate__animated animate__fadeIn animate__faster'>
      <article className="logoArticle">
        <h2 className="blueH2">Most used technologies:</h2>
        <img src="/logo.svg" alt="react-logo" />
        <div>
          <span>React</span>
          <span><i className="fa-solid fa-fish"></i></span>
          <span>JavaScript</span>
          <span><i className="fa-solid fa-fish"></i></span>
          <span>TypeScript</span>
          <span><i className="fa-solid fa-fish"></i></span>
          <span>HTML</span>
          <span><i className="fa-solid fa-fish"></i></span>
          <span>CSS</span>
          <span><i className="fa-solid fa-fish"></i></span>
          <span>Boostrap</span>
          <span><i className="fa-solid fa-fish"></i></span>
          <span>TailWind</span>
          <span><i className="fa-solid fa-fish"></i></span>
          <span>Git</span>
        </div>
      </article>
      <article className="secondArticle">
        <h2 className="redH2">Acquired skills:</h2>
        <div>
          <span>Java</span>
          <i className="fa-solid fa-seedling"></i>
          <span>Spring</span>
          <i className="fa-solid fa-seedling"></i>
          <span>Hibernate</span>
          <i className="fa-solid fa-seedling"></i>
          <span>SQL</span>
          <i className="fa-solid fa-seedling"></i>
          <span>Postman</span>
          <i className="fa-solid fa-seedling"></i>
          <span>AWS Cloud Formation</span>
        </div>
      </article>
      <article className="thirdArticle">
        <h2 className="redH2">Superficially acquired skills:</h2>
        <div>
          <span>Python</span>
          <i className="fa-solid fa-seedling"></i>
          <span>Ansible</span>
          <i className="fa-solid fa-seedling"></i>
          <span>Terraform</span>
          <i className="fa-solid fa-seedling"></i>
          <span>Docker</span>
          <i className="fa-solid fa-seedling"></i>
          <span>Linux</span>
          <i className="fa-solid fa-seedling"></i>
          <span>PowerShell</span>
        </div>
      </article>
      <article className="fourthArticle">
        <h2 className="redH2">Skills in progress:</h2>
        <div>
          <span>React Native</span>
          <i className="fa-solid fa-seedling"></i>
          <span>Next.js 13</span>
          <i className="fa-solid fa-seedling"></i>
          <span>Node.js</span>
          <i className="fa-solid fa-seedling"></i>
          <span>Mongo DB</span>
        </div>
      </article>
    </div>
  )
}
