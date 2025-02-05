import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiMailFill,
  RiMapPin3Line,
  RiMapPinFill,
  RiRoadMapFill,
} from "@remixicon/react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Contacts.scss";
import FadeInSection from "../FadeInSection/FadeInSection";

export default function Contacts() {
  return (
    <>
      <SectionTitle title="Contacts" />
      <FadeInSection>
        <section className="section" id="contacts">
          <div className="contacts__container">
          <div className="contacts__social">
            <h3 className="contacts__title">Find me on social media:</h3>
            <ul className="contacts__list">
              <li>
                <a href="https://www.linkedin.com/in/elizabethsheremet/" className="contacts__link" target="_blank">
                  <RiLinkedinFill size={30} />
                </a>
              </li>
              <li>
                <a href="https://github.com/msselizabeth" className="contacts__link" target="_blank">
                  <RiGithubFill size={30} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/elizabeth_sheremet/" className="contacts__link" target="_blank">
                  <RiInstagramFill size={30} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/elizabethsheremet" className="contacts__link" target="_blank">
                  <RiFacebookFill size={30} />
                </a>
              </li>
            </ul>
          </div>
          <div className="contacts__email-container">
            <h3 className="contacts__title">Reach me via email</h3>
            <a
              className="contacts__email"
              href="mailto:elizabethsheremet@gmail.com">
              <RiMailFill size={22} />
              elizabethsheremet@gmail.com
            </a>

          </div>
         </div>

          

          <p className="contacts__location">
            <RiRoadMapFill size={21} />
            Toronto, Canada
          </p>
       
        </section>
      </FadeInSection>
    </>
  );
}
