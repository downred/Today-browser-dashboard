import "../modules/current-weather.css";
import Article from "./article";
import "../modules/news-box.css";

const NewsBox = (props) => {
  return (
    <div className="box news-box">
      <h4 className="title">What's new today?</h4>
      <span>
        <hr />
      </span>
      <div className="article-container">
        <Article article={props.newsData} />
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
