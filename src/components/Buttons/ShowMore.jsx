import "./Buttons.scss";

export default function ShowMore({ onClick, isExpanded }) {
  return (
    <div className="show-more__container">
       <button className="show-more__button" onClick={onClick}>
      {isExpanded ? "Show less" : "Show more"}
    </button>
   </div>
  );
}
