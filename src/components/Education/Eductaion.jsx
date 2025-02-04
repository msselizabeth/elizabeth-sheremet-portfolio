import { RiBriefcaseFill, RiGraduationCapFill, RiMacbookFill } from "@remixicon/react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Education.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";

const timelineData = [
  {
    date: "SEP 2024 - DEC 2024",
    course: "Software Engineering Bootcamp",
    doc: "Diploma",
    school: "BrainStation - Toronto, Canada",
    icon: <RiMacbookFill size={34} />,
    color: "#c98bdf",
  },
  {
    date: "MAY 2023 - NOV 2024",
    course: "Front-end developer",
    doc: "Remote",
    school: "NextPage - Kyiv, Ukraine",
    icon: <RiBriefcaseFill size={34} />,
    color: "#007CED",
  },
  {
    date: "SEP 2022 - DEC 2023",
    course: "Master of Computer Science",
    doc: "Master's Diploma with honours",
    school: "Odesa National University of Technology - Odesa, Ukraine",
    icon: <RiGraduationCapFill size={34} />,
    color: "#5566e8",
  },
  {
    date: "MAY 2022 - JUNE 2023",
    course: "Fullstack Development",
    doc: "Certificate",
    school: "GoIT School - Kyiv, Ukraine",
    icon: <RiMacbookFill size={34} />,
    color: "#c98bdf",
  },
  {
    date: "MAR 2020 - FEB 2022",
    course: "Digital marketing specialist",
    doc: "Hybrid",
    school: "Supermarket Rybalka - Odesa, Ukraine",
    icon: <RiBriefcaseFill size={34} />,
    color: "#007CED",
  },
  {
    date: "SEP 2020 - JUN 2022",
    course: "Master of Food Technology",
    doc: "Master's Diploma",
    school: "Odesa National Academy of Food Technology - Odesa, Ukraine",
    icon: <RiGraduationCapFill size={34} />,
    color: "#5566e8",
  },
  {
    date: "JAN 2019 - FEB 2020",
    course: "Social Media Manager",
    doc: "Hybrid",
    school: "Zemex - Kyiv, Ukraine",
    icon: <RiBriefcaseFill size={34} />,
    color: "#007CED",
  },
  {
    date: "SEP 2015 - JUN 2020",
    course: "Bachelor of Food Technology and Manufactoring",
    doc: "Bachelor's Diploma",
    school: "Odesa National Academy of Food Technology - Odesa, Ukraine",
    icon: <RiGraduationCapFill size={34} />,
    color: "#5566e8",
  },
];


export default function Education() {
  const [visibleItems, setVisibleItems] = useState(4);

  const loadMore = () => {
    setVisibleItems((prev) => prev + 2);
  };
  return (
    <>
      <SectionTitle title="Education & Experience" />
      <section className="section" id="background">
      <VerticalTimeline layout="2-columns" animate={true}>
          {timelineData.slice(0, visibleItems).map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              contentStyle={{ background: "#012746", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #fff" }}
              date={item.date}
              iconStyle={{ background: "#011c32", color: item.color }}
              icon={item.icon}
            >
              <h3 className="education__course">{item.course}</h3>
              <span className="education__doc">{item.doc}</span>
              <h4 className="education__school">{item.school}</h4>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

      
        {visibleItems < timelineData.length && (
          <div className="load-more__container">
            <button
              onClick={loadMore}
              className="load-more"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </>
  );
}
