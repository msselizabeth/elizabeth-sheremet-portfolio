// import ThemeToggle from "./components/ToggleTheme/ToggleTheme";
import "./App.scss"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

const App = () => {

  return (
    <div className="root__container">
      {/* <ThemeToggle /> */}
      <Header />
      <main>
      <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default App;
