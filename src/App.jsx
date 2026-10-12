import './App.css'

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Salut, je suis Alexandre</h1>
        <p className="titre">Développeur Front-End React</p>
        <p>Je crée des sites web modernes et responsives.</p>
      </header>

      <section className="projets">
        <h2>Mes Projets</h2>
        <div className="projet">
          <h3>Projet 1 : Portfolio React</h3>
          <p>Mon premier projet React déployé en ligne avec Vite.</p>
        </div>
        <div className="projet">
          <h3>Projet 2 : À venir</h3>
          <p>Mon prochain projet apparaîtra ici.</p>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email : Alex1323f@gmail.com</p>
        <p>WhatsApp : +229 01 61 05 53 85</p>
      </section>
    </div>
  )
}

export default App