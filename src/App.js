import Header from "./components/Header";
import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App bg-secondary">
      <Header></Header>

      <div className="app_wrapper">
        <Outlet />
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
