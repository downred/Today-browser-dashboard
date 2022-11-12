import "../modules/current-weather.css";
import Article from "./article";
import "../modules/news-box.css";
import SettingsButton from "./settings-button";

const NewsBox = (props) => {
  return (
    <div className="box news-box">
      <div className="newsbox-header">
        <h4 className="title">What's new today?</h4>
        {/* <SettingsButton /> */}
      </div>
      <span>
        <hr />
      </span>
      <div className="article-container">
        {props.newsData.map((article) => {
          return (
            <Article
              title={article.webTitle}
              
              url={article.webUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewsBox;
