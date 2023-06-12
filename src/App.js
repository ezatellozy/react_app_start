import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeSlider from "./components/home/HomeSlider";
import HomeAppSection from "./components/home/HomeAppSection";
import HomeBlogSection from "./components/home/HomeBlogSection";
import HomeContent from "./components/home/HomeContent";
function App() {
  return (
    <div className="App bg-secondary">
      <Header></Header>
      <div className="app_wrapper">
        <HomeSlider></HomeSlider>
        <HomeContent></HomeContent>
        <HomeAppSection></HomeAppSection>
        <HomeBlogSection></HomeBlogSection>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
