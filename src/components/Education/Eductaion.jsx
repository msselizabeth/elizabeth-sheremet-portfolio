import { RiGraduationCapFill, RiMacbookFill } from "@remixicon/react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Education.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Education() {
  return (
    <>
      <SectionTitle title="Education & Experience" />
      <section className="section" id="background">
        <VerticalTimeline layout="2-columns" animate={true}>
          {/* Bootcamp */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#012746", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="SEP 2024 - DEC 2024"
            iconStyle={{ background: "#011c32", color: "#c98bdf" }}
            icon={<RiMacbookFill size={34} />}
          >
            <h3 className="education__course">Software Engineering Bootcamp</h3>
            <span className="education__doc">Diploma</span>
            <h4 className="education__school">BrainStation - Toronto, Canada</h4>
          </VerticalTimelineElement>

          {/* Work */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#012746", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="MAY 2023 - NOV 2024"
            iconStyle={{ background: "#011c32", color: "#c98bdf" }}
            icon={<RiMacbookFill size={34} />}
          >
            <h3 className="education__course">Front-end developer</h3>
            <span className="education__doc">Remote</span>
            <h4 className="education__school">NextPage - Kyiv, Ukraine</h4>
         
          </VerticalTimelineElement>
          {/* Магистратура */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#012746", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="SEP 2022 - DEC 2023"
            iconStyle={{ background: "#011c32", color: "#5566e8" }}
            icon={<RiGraduationCapFill size={34} />}
          >
            <h3 className="education__course">Master of Computer Science</h3>
            <span className="education__doc">Master's Diploma with honours</span>
            <h4 className="education__school">Odesa National University of Technology - Odesa, Ukraine</h4>
            {/* <p>
              Дипломный проект: веб-приложение _GastroGuide_, отличная оценка.
            </p> */}
          </VerticalTimelineElement>

          {/* Курсы */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#012746", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="MAY 2022 - JUNE 2023"
            iconStyle={{ background: "#011c32", color: "#c98bdf" }}
            icon={<RiMacbookFill size={34} />}
          >
            <h3 className="education__course">Fullstack Development</h3>
            <span className="education__doc">Certificate</span>
            <h4 className="education__school">GoIT School - Kyiv, Ukraine</h4>
            {/* <p>Основы React, Node.js, работа с базами данных.</p> */}
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#012746", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="MAR 2020 - FEB 2022"
            iconStyle={{ background: "#011c32", color: "#5566e8" }}
            icon={<RiGraduationCapFill size={34} />}
          >
            <h3 className="education__course">Digital marketing specialist</h3>
            <span className="education__doc">Hybrid</span>
            <h4 className="education__school">Supermarket Rybalka - Odesa, Ukraine</h4>

          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#012746", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="SEP 2020 - JUN 2022"
            iconStyle={{ background: "#011c32", color: "#5566e8" }}
            icon={<RiGraduationCapFill size={34} />}
          >
            <h3 className="education__course">Master of Food Technology</h3>
            <span className="education__doc">Master's Diploma</span>
            <h4 className="education__school">Odesa National Academy of Food Technology - Odesa, Ukraine</h4>

          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#012746", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="JAN 2019 - FEB 2020"
            iconStyle={{ background: "#011c32", color: "#5566e8" }}
            icon={<RiGraduationCapFill size={34} />}
          >
            <h3 className="education__course">Social Media Manager</h3>
            <span className="education__doc">Hybrid</span>
            <h4 className="education__school">Zemex - Kyiv, Ukraine</h4>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#012746", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="SEP 2015 - JUN 2020"
            iconStyle={{ background: "#011c32", color: "#5566e8" }}
            icon={<RiGraduationCapFill size={34} />}
          >
            <h3 className="education__course">Bachelor of Food Technology and Manufactoring</h3>
            <span className="education__doc">Bachelor's Diploma</span>
            <h4 className="education__school">Odesa National Academy of Food Technology - Odesa, Ukraine</h4>

          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </>
  );
}
