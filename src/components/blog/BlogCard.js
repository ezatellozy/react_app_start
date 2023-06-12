import "./blogCard.scss";
import blogImg from "../../assets/dammyImages/blog.svg";
import fileIcon from "../../assets/images/icons/file_icon.svg";
import dateIcon from "../../assets/images/icons/date_icon.svg";
const BlogCard = (props) => (
  <div className="blog_card rounded-3xl overflow-hidden flex flex-col border mt-9 w-full max-w-[370px] mx-auto">
    <div className="blog_img">
      <img
        className="max-w-full object-cover block"
        src={blogImg}
        alt="blog img"
      />
    </div>
    <div className="blog_card_body px-3 pt-3 pb-5">
      <div className="top_body_header">
        <p>
          <img src={dateIcon} alt="date icon" />
          <span>{props.item.date}</span>
        </p>
        <p>
          <img src={fileIcon} alt="file icon" />
          <span>{props.item.category}</span>
        </p>
      </div>
      <h2 className="text-xl font-bold max-w-[320px] my-2">
        {props.item.name}
      </h2>
      <p className="text-text-dark text-base max-w-[320px]">
        {props.item.desc}
      </p>
    </div>
  </div>
);

export default BlogCard;
