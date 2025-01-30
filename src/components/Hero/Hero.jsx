import "./Hero.scss";


export default function Hero() {
  return (
    <section className="section hero">
      {/* <img
        src="/images/hero.jpg"
        alt="Elizabeth sheremet - software engineer"
        className="hero__image"
      /> */}

      <div>
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
          <p>Hi all. I am</p>
          <h1 className="hero__personal-info--name">Elizabeth Sheremet</h1>
          <p className="hero__personal-info--role">&gt; Software Engineer</p>
        </div>

        <div className="hero__github">
          <p className="hero__github-comment">// find my profile on Github:</p>
          <a
            className="hero__github-link"
            href="https://github.com/msselizabeth"
            target="_blank">
            <span className="hero__github-var">const</span>
            <span className="hero__github-name">githubLink</span>
            <span className="hero__github-equal">=</span>
            <span className="hero__github-value">
              "https://github.com/msselizabeth"
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
