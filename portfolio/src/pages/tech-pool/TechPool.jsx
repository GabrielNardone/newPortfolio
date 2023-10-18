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
          <span>React Native</span>
          <span><i className="fa-solid fa-fish"></i></span>
          <span>Redux</span>
          <span><i className="fa-solid fa-fish"></i></span>
          <span>HTML</span>
          <span><i className="fa-solid fa-fish"></i></span>
          <span>CSS</span>
          <span><i className="fa-solid fa-fish"></i></span>
          <span>Material UI</span>
          <span><i className="fa-solid fa-fish"></i></span>
          <span>TailWind</span>
          <span><i className="fa-solid fa-fish"></i></span>
          <span>Git</span>
          <span><i className="fa-solid fa-fish"></i></span>
        </div>
      </article>
      <article className="secondArticle">
        <h2 className="redH2">Acquired skills:</h2>
        <div>
          <span>Java</span>
          <i className="fa-solid fa-seedling"></i>
          <span>Maven</span>
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
          <i className="fa-solid fa-seedling"></i>
          <span>Google Firebase</span>
          <i className="fa-solid fa-seedling"></i>
        </div>
      </article>
      <article className="thirdArticle">
        <h2 className="redH2">Superficially acquired skills:</h2>
        <div>
          <span>Node.js</span>
          <i className="fa-solid fa-seedling"></i>
          <span>Mongo DB</span>
          <i className="fa-solid fa-seedling"></i>
          <span>Python</span>
          <i className="fa-solid fa-seedling"></i>
          <span>Docker</span>
          <i className="fa-solid fa-seedling"></i>
          <span>Linux</span>
          <i className="fa-solid fa-seedling"></i>
          <span>PowerShell</span>
          <i className="fa-solid fa-seedling"></i>
        </div>
      </article>
      <article className="fourthArticle">
        <h2 className="redH2">Skills in progress:</h2>
        <div>
          <span>Next.js 13</span>
          <i className="fa-solid fa-seedling"></i>
          <span>Ansible</span>
          <i className="fa-solid fa-seedling"></i>
        </div>
      </article>
    </div>
  )
}
