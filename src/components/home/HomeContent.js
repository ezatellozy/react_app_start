import HomeSolutions from "./HomeSolutions";
import HomeStats from "./HomeStats";
import HomeClients from "./HomeClients";
import HomeConnectLawyer from "./HomeConnectLawyer";
import GeneralBaseSection from "../general/GeneralBaseSection";
import service1 from "../../assets/dammyImages/service1.png";
const HomeContent = () => {
  const service = {
    id: 1,
    image: service1,
    title: "<h2><span>Law Solutions</span> to solve your problems</h2>",
    description:
      "<p className='mb-5'>The firm was established in 1990 in Kolkata, India as an Intellectual Property Law Firm.</p> <p>Our exposure to the complexities in ambit of Intellectual Property Law gave us the impetus and spiration to diversify into other streams.</p>",
  };

  const routePath = {
    name: "Read More",
    path: "/",
  };
  return (
    <div className="home_body rounded-[2rem] -translate-y-8 bg-white">
      <div className="container mx-auto">
        <div className="home_content py-11">
          <GeneralBaseSection
            sectionData={service}
            route={routePath}
          ></GeneralBaseSection>

          <HomeStats></HomeStats>
          <HomeSolutions></HomeSolutions>
          <HomeClients></HomeClients>
          <HomeConnectLawyer></HomeConnectLawyer>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
