import "../modules/news-box.css";

const Article = (props) => {
  return (
    <div className="article">
      <h4 className="news-header">
        <a className="article-link" href={props.url} target="_blank">
          {props.title}
        </a>
      </h4>
      <p className="content">{props.description}</p>
    </div>
  );
};

export default Article;
