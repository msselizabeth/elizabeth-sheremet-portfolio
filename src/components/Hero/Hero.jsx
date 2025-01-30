import "./Hero.scss";

export default function Hero() {
  return (
    <section className="section hero">
      {/* <img
        src="/images/hero.jpg"
        alt="Elizabeth sheremet - software engineer"
        className="hero__image"
      /> */}

      <div className="video__container">
        <video
          src="/public/portfolio-video.webm"
          autoPlay
          loop
          muted
          playsInline
          className="video">
          The video aren't supported by your browser.
        </video>
      </div>

      <div className="hero__content">
        <div className="hero__personal-info">
          <p className="hero__personal-info--role">Software Engineer</p>
          <h1 className="hero__personal-info--name">Elizabeth Sheremet</h1>
        </div>

        <p className="hero__content-greeting">Welcome to my page 👋</p>

        <p>
          My name is Elizabeth, and I am passionate about developing
          user-focused applications that deliver convenient and intuitive
          experiences. With a goal to solve complex problems, I use innovative
          technologies and modern approaches to development. I'm eaget to bring
          various design concepts, as well as reliable and efficient server
          solutions to life ensures interfaces are attractive, effective and
          user-friendly.
        </p>
      </div>
    </section>
  );
}
