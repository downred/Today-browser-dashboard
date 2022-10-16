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
        {props.newsData.map((article) => {
          return <Article title={article.title} description={article.description} url={article.url} />;
        })}
      </div>
    </div>
  );
};

export default NewsBox;
