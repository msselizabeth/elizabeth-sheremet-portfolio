import "./Skills.scss";
import {
  RiCodeBoxFill,
  RiDatabase2Fill,
  RiGitPullRequestFill,
  RiMacFill,
  RiServerFill,
} from "@remixicon/react";
import StackIcon from "tech-stack-icons";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useEffect, useRef } from "react";
import { useAnimationFrame } from "motion/react";
import FadeInSection from "../FadeInSection/FadeInSection";

export default function Skills() {
  const ref = useRef(null);
  const videoRef = useRef(null);
  useAnimationFrame((t) => {
    if (!ref.current) return;

    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const handleVideoEnd = () => setVideoEnded(true);
  return (
    <>
      <SectionTitle title="Skills" />
      <FadeInSection>
        <section id="skills">
          <div className="skills">
            {/*3D cube */}
            <div className="cube-container">
              <div className="cube" ref={ref}>
                <div className="side front">
                  <StackIcon name="js" className="icon" />
                  <StackIcon name="typescript" className="icon" />
                  <StackIcon name="mongodb" className="icon" />
                  <StackIcon name="mysql" className="icon" />
                </div>
                <div className="side right">
                  <StackIcon name="git" className="icon" />
                  <StackIcon name="github" className="icon github" />
                  <StackIcon name="npm" className="icon" />
                  <img
                    src="/images/express-icon.png"
                    alt="Express.js icon"
                    className="icon"
                  />
                </div>
                <div className="side back">
                  <StackIcon name="postman" className="icon" />
                  <StackIcon name="jira" className="icon" />
                  <StackIcon name="aws" className="icon aws" />
                  <StackIcon name="webpack" className="icon" />
                </div>
                <div className="side left">
                  <StackIcon name="css3" className="icon" />
                  <StackIcon name="html5" className="icon" />
                  <StackIcon name="sass" className="icon" />
                  <StackIcon name="figma" className="icon" />
                </div>
                <div className="side top">
                  <img
                    src="/images/nextauth-icon.png"
                    alt="NextAuth icon"
                    className="icon"
                  />
                  <img
                    src="/images/jwt-icon.png"
                    alt="Json Web Token icon"
                    className="icon"
                  />
                  <StackIcon name="prisma" className="icon prisma" />
                  <StackIcon name="openai" className="icon open-ai" />
                </div>
                <div className="side bottom">
                  <StackIcon name="reactjs" className="icon" />
                  <StackIcon name="tailwindcss" className="icon" />
                  <StackIcon name="nextjs2" className="icon nextjs" />
                  <StackIcon name="nodejs" className="icon" />
                </div>
              </div>
            </div>

            {/* Skills-list */}
            <div className="skills-container">
              {/* Programming */}
              <div className="skill">
                <h3 className="skill__title">
                  <RiCodeBoxFill size={28} color="#007CED" /> Programing
                  languages
                </h3>
                <ul className="skill__list">
                  <li className="skill__item">
                    <StackIcon name="js" className="icon" />
                    <p>JavaScript</p>
                  </li>
                  <li className="skill__item">
                    <StackIcon name="typescript" className="icon" />
                    <p>TypeScript</p>
                  </li>
                </ul>
              </div>

              {/* Databases*/}
              <div className="skill">
                <h3 className="skill__title">
                  <RiDatabase2Fill size={28} color="#007CED" /> DataBases
                </h3>
                <ul className="skill__list">
                  <li className="skill__item">
                    <StackIcon name="mongodb" className="icon" />
                    <p>MongoDB</p>
                  </li>
                  <li className="skill__item">
                    <StackIcon name="mysql" className="icon" />
                    <p>MySQL</p>
                  </li>
                </ul>
              </div>
              {/* Front-end */}
              <div className="skill">
                <h3 className="skill__title">
                  <RiMacFill size={28} color="#007CED" /> Front-End development
                </h3>
                <ul className="skill__list">
                  <li className="skill__item">
                    <StackIcon name="html5" className="icon" />
                    <p>HTML</p>
                  </li>
                  <li className="skill__item">
                    <StackIcon name="css3" className="icon" />
                    <p>CSS</p>
                  </li>
                  <li className="skill__item">
                    <StackIcon name="sass" className="icon" />
                    <p>SASS</p>
                  </li>
                  <li className="skill__item">
                    <StackIcon name="reactjs" className="icon" />
                    <p>React.js</p>
                  </li>
                  <li className="skill__item">
                    <StackIcon name="nextjs2" className="icon nextjs" />
                    <p>Next.js</p>
                  </li>
                  <li className="skill__item">
                    <StackIcon name="tailwindcss" className="icon" />
                    <p>TailwindCSS</p>
                  </li>
                </ul>
              </div>

              {/* Back-end */}
              <div className="skill">
                <h3 className="skill__title">
                  <RiServerFill size={28} color="#007CED" /> Back-End
                  development
                </h3>
                <ul className="skill__list">
                  <li className="skill__item">
                    <StackIcon name="nodejs" className="icon" />
                    <p>Node.js</p>
                  </li>
                  <li className="skill__item">
                    <img
                      src="/images/express-icon.png"
                      alt="Express.js icon"
                      className="icon"
                    />
                    <p>Express.js</p>
                  </li>
                  <li className="skill__item">
                    <img
                      src="/images/jwt-icon.png"
                      alt="Json Web Token icon"
                      className="icon"
                    />
                    <p>JWT</p>
                  </li>
                  <li className="skill__item">
                    <img
                      src="/images/nextauth-icon.png"
                      alt="NextAuth icon"
                      className="icon"
                    />
                    <p>NextAuth</p>
                  </li>
                  <li className="skill__item">
                    <StackIcon name="openai" className="icon open-ai" />
                    <p>OpenAI</p>
                  </li>
                  <li className="skill__item">
                    <StackIcon name="mongoose" className="icon" />
                    <p>Mongoose</p>
                  </li>
                  <li className="skill__item">
                    <StackIcon name="prisma" className="icon prisma" />
                    <p>Prisma ORM</p>
                  </li>
                </ul>
              </div>

              {/* Version control & Development */}
              <div className="skill">
                <h3 className="skill__title">
                  <RiGitPullRequestFill size={28} color="#007CED" />
                  Version control & Development
                </h3>
                <ul className="skill__list">
                  <li className="skill__item">
                    <StackIcon name="git" className="icon" />
                    <p>GIT</p>
                  </li>
                  <li className="skill__item">
                    <StackIcon name="github" className="icon github" />
                    <p>Github</p>
                  </li>
                  <li className="skill__item">
                    <StackIcon name="heroku" className="icon" />
                    <p>Heroku</p>
                  </li>
                  <li className="skill__item">
                    <img
                      src="/images/vercel-icon.png"
                      alt="Vercel icon"
                      className="icon"
                    />
                    <p>Vercel</p>
                  </li>
                  <li className="skill__item">
                    <StackIcon name="aws" className="icon aws" />
                    <p>AWS</p>
                  </li>
                </ul>
              </div>

              {/* Tools & Platforms */}
              <div className="skill">
                <h3 className="skill__title">
                  <RiGitPullRequestFill size={28} color="#007CED" />
                  Tools & Platforms
                </h3>
                <ul className="skill__list">
                  <li className="skill__item">
                    <StackIcon name="webpack" className="icon" />
                    <p>Webpack</p>
                  </li>
                  <li className="skill__item">
                    <StackIcon name="vitejs" className="icon" />
                    <p>Vite</p>
                  </li>
                  <li className="skill__item">
                    <StackIcon name="figma" className="icon" />
                    <p>Figma</p>
                  </li>
                  <li className="skill__item">
                    <StackIcon name="jira" className="icon" />
                    <p>Jira</p>
                  </li>
                  <li className="skill__item">
                    <StackIcon name="npm" className="icon" />
                    <p>npm</p>
                  </li>
                  <li className="skill__item">
                    <StackIcon name="postman" className="icon" />
                    <p>Postman</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* video background */}
          <div className="skills__video-container">
            <video
              ref={videoRef}
              src="/skills-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="skills__video">
              The video aren't supported by your browser.
            </video>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}
