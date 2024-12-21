import "./Buttons.scss";

export default function ShowMore({ onClick, isExpanded }) {
  return (
    <button className="show-more-button" onClick={onClick}>
      {isExpanded ? "Show less" : "Show more"}
    </button>
  );
}
