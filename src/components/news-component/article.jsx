import "../modules/news-box.css";

const Article = (props) => {
  return (
    <div className="article">
      <h4 className="news-header">{props.title}</h4>
      <p className="content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
        deleniti ipsa ut eveniet placeat quas distinctio sint fuga repellat
        officia, vel unde sapiente, ea sequi magnam eaque adipisci esse error
        iste reiciendis voluptatum. Doloribus magni iusto repellat libero porro,
        aspernatur pariatur soluta voluptate officia deleniti at, recusandae
        dolorem, inventore eum!
      </p>
    </div>
  );
};

export default Article;
