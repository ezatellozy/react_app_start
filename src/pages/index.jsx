// import HomeSlider from "../components/home/HomeSlider";
// import HomeAppSection from "../components/home/HomeAppSection";
import HomeBlogSection from "../components/home/HomeBlogSection";
// import HomeContent from "../components/home/HomeContent";
import { useState, useEffect } from "react";
import axios from "axios";

async function fetchData() {

 return await axios
  .get("general/home_website")
 
}

function Home() {
  const [homeData, setHomeData] = useState(null);


  useEffect(() => {
    fetchData().then(res => {
      console.log(res.data.data)
      setHomeData(res.data.data)
    })

    return ()=> console.log('out')
  },[]);

  return (
 
       homeData &&
      <div className="home_wrapper">
        {/* <HomeSlider></HomeSlider> */}
        {/* <HomeContent></HomeContent> */}
        {/* <HomeAppSection></HomeAppSection> */}
        <HomeBlogSection items={homeData.Blogs}></HomeBlogSection>
      </div>
    
  );
}

export default Home;
