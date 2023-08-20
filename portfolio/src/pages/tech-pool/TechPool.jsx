import "./tech-pool.css"

export const TechPool = () => {
  return (
    <div className='divTechPool'>
      <div>
          <span>Most used technologies:</span>
        <article className="logoArticle">
          <img src="/logo.svg" alt="react-logo"/>
          <p> React / JavaScript / TypeScript / HTML / CSS / Boostrap / Tailwind / Git </p>
        </article>
        <article>
          <span>Acquired skills:</span>
          <p>Java / Spring / Hibernate / SQL / Postman / AWS Cloud Formation</p>
        </article>
        <article>
          <span>Superficially acquired skills:</span>
          <p>Python / Ansible / Terraform / Docker /  Linux / PowerShell</p>
        </article>
        <article>
          <span>Skills in progress:</span>
          <p>React Native / Next.js / Node.js /  MongoDB</p>
        </article>
      </div>
    </div>
  )
}
