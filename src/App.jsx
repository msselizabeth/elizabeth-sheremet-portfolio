// import ThemeToggle from "./components/ToggleTheme/ToggleTheme";

// import Contacts from "./components/Contacts/Contacts";
// import Education from "./components/Education/Eductaion";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        {/* <Education />
        <Contacts /> */}
      </main>
      <Footer />
    </>
  );
};

export default App;
