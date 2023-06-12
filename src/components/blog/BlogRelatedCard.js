import "./relatedCard.scss";
import blogImg from "../../assets/dammyImages/blog.svg";
import fileIcon from "../../assets/images/icons/file_icon.svg";
import dateIcon from "../../assets/images/icons/date_icon.svg";
const BlogRelatedCard = () => (
  <li className="blog_related_card flex items-center w-full py-4">
    <div className="blog_img w-20 h-20 rounded-full overflow-hidden">
      <img
        src={blogImg}
        className="w-full h-full object-cover"
        alt="blog img"
      />
    </div>
    <div className="blog_card_body px-3 max-w-[250px] me-auto">
      <h2 className="text-base font-bold max-w-[320px] mb-2">
        More benefits beyond legal support
      </h2>

      <div className="top_body_header">
        <p>
          <img src={dateIcon} alt="date icon" />
          <span>19 Nov , 2022</span>
        </p>
        <p>
          <img src={fileIcon} alt="file icon" />
          <span>Criminal</span>
        </p>
      </div>
    </div>
  </li>
);

export default BlogRelatedCard;
