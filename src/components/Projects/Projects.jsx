import "./Projects.scss";
import { RiLinksFill } from "@remixicon/react";

export default function Projects() {
  return (
    <section className="section">
      <h2 className="section-title">// Projects</h2>
      <ul className="projects__list">
        <li className="projects__item">
          <img
            src="/images/gastro-guide.png"
            alt="Gastro guide - culinary guide through the world"
            className="project__image"
          />
          <div>
            <div className="project__name-container">
              <h3 className="project__title">Gastro Guide</h3>
              <a
                href="https://gastronomic-guide.vercel.app/"
                className="project__link"
              >
                <RiLinksFill size={24} />
              </a>
            </div>
            <p className="project__description">// Description</p>
            <p className="project__description-text">
              GastroGuide is an innovative, multilingual web application that
              brings the world of cooking and food culture to your fingertips.
              Designed for ease and accessibility, it offers step-by-step
              recipes, tools to calculate calories and macronutrients, and
              advanced search and filter options. Its mobile-friendly interface
              ensures seamless use on any device. GastroGuide stands out with
              its personalized features: users can create profiles to receive
              tailored recipe suggestions, save and rate their favorites, chat
              with an AI assistant for recommendations, and participate in
              community discussions. It’s more than just a recipe
              app—GastroGuide is your interactive and personalized guide to
              global cuisine and healthy living.
            </p>
          </div>
        </li>

        <li className="projects__item">
          <img
            src="/images/iggy.png"
            alt="Iggy Discover - AI search tool"
            className="project__image"
          />
          <div>
            <h3 className="project__title">Iggy Discover</h3>
            <p className="project__description">// Description</p>
            <p className="project__description-text">
              Iggy Discover - Created an advanced AI-powered tool to enhance
              user interaction with Meta's AI technologies. The tool allows
              users to search for similar profiles, images, or locations on
              Instagram based on a given photo, using sophisticated algorithms
              to provide highly accurate and relevant results. It seamlessly
              replicates Instagram’s functionality and interface, delivering an
              intuitive and engaging user experience. This industrial project,
              developed in collaboration with Meta and BrainStation, showcased
              innovative solutions to improve AI-driven user engagement.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
