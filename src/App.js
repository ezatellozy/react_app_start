import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeSlider from "./components/home/HomeSlider";
import HomeContent from "./components/home/HomeContent";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="app_wrapper">
        <HomeSlider></HomeSlider>
        <HomeContent></HomeContent>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
