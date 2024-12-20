// import ThemeToggle from "./components/ToggleTheme/ToggleTheme";
import "./App.scss";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <div className="root__container">
      <Header />
      <main>
        <Hero />
        <section className="section about-skills__container">
          <About />
          <Skills />
        </section>
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
