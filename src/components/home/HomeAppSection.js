import mobileImg from "../../assets/images/mobile.svg";
import appStore from "../../assets/images/app_store.svg";
import googlePlay from "../../assets/images/google_play.svg";
const HomeAppSection = () => (
  <div className="py-14 px-4 md:px-6">
    <div className="app_section py-5">
      <div className="container">
        <div className="app_section_content flex items-center mb-5 lg:mb-0 flex-wrap-reverse lg:flex-wrap">
          <div className="app_section__content w-full md:w-1/2">
            <h2 className="title text-white font-bold pb-16">
              <span>Download</span> Mobile Application
            </h2>

            <div className="download_section">
              <h4 className="text-text-dark text-base mb-2">
                Download Application:
              </h4>
              <div className="actions">
                <a href="/">
                  <img src={googlePlay} alt="google_play_icon" />
                </a>
                <a href="/">
                  <img src={appStore} alt="app_store_icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="img_wrapper w-full md:w-1/2">
            <img src={mobileImg} alt="mobile " />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomeAppSection;
