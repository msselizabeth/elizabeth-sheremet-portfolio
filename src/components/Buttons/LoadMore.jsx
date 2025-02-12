import "./Buttons.scss"

export default function LoadMore({loadMore}) {
  return (
    <div className="load-more__container">
      <button onClick={loadMore} className="load-more">
        Load More
      </button>
    </div>
  );
}
