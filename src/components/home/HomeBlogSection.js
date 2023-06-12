import BlogCard from "../blog/BlogCard";
const HomeBlogSection = () => {
  const blogs = [
    {
      id: 1,
      date: "19 Nov , 2022",
      category: "Criminal",
      name: "More benefits beyond legal support",
      desc: "We know life’s hard. So we try to make it simple: no retainers or legal fees..",
    },
    {
      id: 2,
      date: "19 Nov , 2022",
      category: "Criminal",
      name: "More benefits beyond legal support",
      desc: "We know life’s hard. So we try to make it simple: no retainers or legal fees..",
    },
    {
      id: 3,
      date: "19 Nov , 2022",
      category: "Criminal",
      name: "More benefits beyond legal support",
      desc: "We know life’s hard. So we try to make it simple: no retainers or legal fees..",
    },
  ];

  return (
    <div className="px-4 md:px-6">
      <div className="blog_section py-14">
        <div className="container">
          <div className="header flex items-end justify-between pb-16">
            <h2 className="font-bold text-3xl lg:text-5xl flex-1 max-w-[600px] capitalize">
              Learn more about us from our
              <span className="text-primary">latest news</span>
            </h2>
            <a
              className="base-link border-primary border-b w-fit hover:text-[#f1ca7e]"
              href="/"
            >
              See More
              <i className="pi pi-arrow-up-left"></i>
            </a>
          </div>
          <div className="blog_section_content grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {blogs.map((el) => (
              <div className="" key={el.id}>
                <BlogCard item={el}></BlogCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlogSection;
