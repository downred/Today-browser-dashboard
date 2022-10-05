import "../modules/current-weather.css";
import Article from "./article";
import "../modules/news-box.css";

const NewsBox = () => {
  return (
    <div className="box news-box">
      <h4 className="title">What's new today?</h4>
      <span>
        <hr />
      </span>
      <div className="article-container">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  );
};

export default NewsBox;
