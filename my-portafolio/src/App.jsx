import { AboutMe } from "./components/AboutMe"
import { Contact } from "./components/Contact"
import { Home } from "./components/Home"
import { NavBar } from "./components/NavBar"
import { Projects } from "./components/Projects"


function App() {


  return (
    <>
      <div className="scroll-smooth">
        <NavBar />
        <section id="home"><Home /></section>
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
