import { RiContactsFill, RiSparkling2Fill } from "@remixicon/react";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="section hero">
      {/* Hero part 1 */}
      <div className="hero__part-one">
        <div className="video__container">
          <video
            src="/portfolio-video.webm"
            autoPlay
            loop
            muted
            playsInline
            className="video">
            The video aren't supported by your browser.
          </video>
        </div>

        <div className=" hero__content hero__content-part-one">
          <p className="hero__content-role ">Software Engineer</p>
          <h1 className="hero__content-name ">Elizabeth Sheremet</h1>

          <p className="hero__content-greeting ">Welcome to my page 👋</p>

          <p className="hero__content-text ">
            My name is Elizabeth, and I am passionate about developing
            user-focused applications that deliver convenient and intuitive
            experiences. With a goal to solve complex problems, I use innovative
            technologies and modern approaches to development. I'm eager to
            bring various design concepts, as well as reliable and efficient
            server solutions to life ensures interfaces are attractive,
            effective and user-friendly.
          </p>

          <div className="hero__action-container">
            <a href="/#projects" className="hero__action-link">
              <RiSparkling2Fill size={20}/>
              Projects
            </a>
            <a href="/#contacts" className="hero__action-link">
              <RiContactsFill size={20}/>
              Contacts
            </a>
          </div>
        </div>
      </div>

      {/* Hero part 2 */}
      <div className="hero__part-two">
        <div className="hero__image-container">
          <img
            src="/images/hero.jpg"
            alt="Elizabeth sheremet - software engineer"
            className="hero__image"
          />
        </div>
        <div className="hero__content hero__content-part-two">
          <p className="hero__content-text">
          I hold Master’s degree in Computer Science and have completed full-stack development course and software engineering bootcamp. With over two years of experience as software developer, I’ve gained valuable skills in development and teamwork.
          </p>
          <p className="hero__content-text">
            Furthermore, five years of experience in digital marketing and sales
            have provided me with a deep understanding of the goals of both
            developers and customers. This unique combination allows me to
            consider the interests of all sides when creating high-quality and
            in-demand solutions, ensuring they meet user and business needs. I
            love working in a team environment, valuing each member's
            contribution and striving for collective achievement.
          </p>
          <p className="hero__content-text">
            In my free time, I prefer to work on personal projects that help me
            continually refine my skills and explore new. Proficient in modern
            technologies and tools for both frontend and backend development. I
            am always open to new knowledge and opportunities for personal as
            well as professional growth and  believe that practical experience,
            deep knowledge, and high motivation are key factors for success.
          </p>
        </div>
      </div>
    </section>
  );
}
