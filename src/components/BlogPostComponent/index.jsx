import "./style.scss";
import authorImg from "../../assets/blogImage/author.png";
import calender from "../../assets/blogImage/calender.png";
import tag from "../../assets/blogImage/tag.png";

const BlogPostComponent = ({
  coverImage,
  author,
  date,
  category,
  title,
  description,
}) => {
  return (
    <div className="blog-post-item">
      {/* Blog Kapak Görseli */}
      <div
        className="blog-cover"
        onClick={() => (window.location.href = "/#/blog")}
      >
        <img src={coverImage} alt={title} />
      </div>

      {/* Blog Detayları */}
      <div className="blog-content">
        <div className="post-details">
          <span className="detail">
            <img src={authorImg} alt="author-img" /> {author}
          </span>
          <span className="detail">
            <img src={calender} alt="calender-img" /> {date}
          </span>
          <span className="detail">
            <img src={tag} alt="tag-img" /> {category}
          </span>
        </div>

        {/* Başlık */}
        <h3
          className="blog-title"
          onClick={() => (window.location.href = "/#/blog")}
        >
          {title}
        </h3>

        {/* Açıklama */}
        <p className="blog-description">{description}</p>

        {/* Read More Butonu */}
        <button
          className="read-more"
          onClick={() => (window.location.href = "/#/blog")}
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default BlogPostComponent;
