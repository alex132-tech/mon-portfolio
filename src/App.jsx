import './App.css'

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Salut, je suis Alexandre</h1>
        <p className="titre">Développeur Front-End React</p>
        <p>Je crée des sites web modernes et responsives.</p>
        <a href="https://wa.me/2290161055385" className="btn-contact" target="_blank" rel="noreferrer">
          Me contacter sur WhatsApp
        </a>
      </header>

      <section className="apropos">
        <h2>À propos</h2>
        <p>
          Je suis développeur front-end basé au Bénin, spécialisé en React.
          Je crée des interfaces modernes, rapides et responsives pour des
          clients locaux et internationaux. Disponible pour des missions
          à distance.
        </p>
      </section>

      <section className="projets">
        <h2>Mes Projets</h2>
        <div className="projet">
          <h3>Projet 1 : Portfolio React</h3>
          <p>Mon premier projet React déployé en ligne avec Vite et Vercel.</p>
          <a href="https://mon-portfolio-gamma-gold.vercel.app" target="_blank" rel="noreferrer">
            Voir le projet →
          </a>
        </div>
        <div className="projet">
          <h3>Projet 2 : À venir</h3>
          <p>Mon prochain projet apparaîtra ici très bientôt.</p>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>📧 Email : <a href="mailto:alex13231@gmail.com">alex13231@gmail.com</a></p>
        <p>📱 WhatsApp : <a href="https://wa.me/2290161055385" target="_blank" rel="noreferrer">+229 01 61 05 53 85</a></p>
        <p>🌍 Portfolio : <a href="https://mon-portfolio-gamma-gold.vercel.app" target="_blank" rel="noreferrer">mon-portfolio-gamma-gold.vercel.app</a></p>
      </section>
    </div>
  )
}

export default App