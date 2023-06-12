import serviceImg from "../../assets/dammyImages/service1.png";

const HomeConnectLawyer = () => (
  <div className="base_section_wrapper py-14">
    <div className="flex flex-wrap justify-center">
      <div className="text_section_wrapper ps-4 md:w-1/2">
        <h2 className="font-bold text-5xl w-full md:max-w-[490px] leading-[3.5rem]">
          Connect with Our <span className="text-primary">Law </span>
          <span className="text-primary">Group</span> Everyday!
        </h2>
        <p className="text-text-dark w-full md:max-w-[450px]">
          Our exposure to the complexities in ambit of Intellectual Property Law
          gave us the impetus and spiration to diversify into other streams.
        </p>

        <a href="/" className="base-link block mt-8">
          Explore More
          <i className="pi pi-arrow-up-left"></i>
        </a>
      </div>
      <div className="image_wrapper mb-8 md:mb-0 md:w-1/2">
        <figure>
          <img
            width="470"
            src={serviceImg}
            className="h-auto ms-auto rounded-lg"
            alt="services"
          />
        </figure>
      </div>
    </div>
  </div>
);

export default HomeConnectLawyer;
