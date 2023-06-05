import logo from "../assets/images/logo/logo_footer.svg";
import phone from "../assets/images/icons/phone.svg";
import email from "../assets/images/icons/email.svg";
import work from "../assets/images/icons/work.svg";
import location from "../assets/images/icons/location.svg";
import googlePlay from "../assets/images/google_play.svg";
import appStore from "../assets/images/app_store.svg";

import "../assets/style/components/footer.scss";
function Footer() {
  return (
    <footer id="footer" className="bg-secondary pt-11">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="logo_side pb-11 md:pb-0 md:pe-11 md:ps-14 w-full md:w-fit">
            <div className="logo flex justify-center md:justify-normal">
              <a href="/" className="text-primary">
                <img src={logo} alt="logo" />
              </a>
            </div>
          </div>
          <div className="content_side flex-1 border-t pt-3 md:pt-0 md:border-t-0 md:border-s border-third">
            <div className="top border-b border-third md:ps-8">
              <div className="flex flex-wrap">
                <div className="links w-full mb-3 md:mb-0 md:w-6/12 lg:w-3/12">
                  <ul>
                    <li>
                      <a href="/">home</a>
                    </li>
                    <li>
                      <a href="/">aboutUs</a>
                    </li>
                    <li>
                      <a href="/">services</a>
                    </li>

                    <li>
                      <a href="/" to="/faq">
                        blogs
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="contact_info w-full mb-3 md:mb-0 md:w-6/12 lg:w-5/12">
                  <div className="inner_item">
                    <div className="item">
                      <div className="icon">
                        <img src={phone} alt="phone_icon" />
                      </div>
                      <div className="content">
                        <h3 className="title">Phone Number</h3>
                        <div className="desc">
                          <a
                            href="/"
                            href="tel:1010101010"
                            aria-label="phone-number"
                          >
                            1010101010
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="icon">
                        <img src={email} alt="phone_icon" />
                      </div>
                      <div className="content">
                        <h3 className="title">Email Address</h3>
                        <div className="desc">
                          <a
                            href="/"
                            href="tel:1010101010"
                            aria-label="phone-number"
                          >
                            1010101010
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="icon">
                        <img src={location} alt="phone_icon" />
                      </div>
                      <div className="content">
                        <h3 className="title">Address</h3>
                        <div className="desc">
                          <a
                            href="/"
                            href="tel:1010101010"
                            aria-label="phone-number"
                          >
                            1010101010
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="icon">
                        <img src={work} alt="phone_icon" />
                      </div>
                      <div className="content">
                        <h3 className="title">Work Time</h3>
                        <div className="desc">
                          <p>Days : Sunday - Thursday</p>
                          <p>Time : 09:00 AM - 05:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="download_section w-full my-3 lg:my-0 lg:w-4/12">
                  <h4 className=" text-text-dark text-base mb-2">
                    Download Application:
                  </h4>
                  <div className="actions">
                    <a href="/" href="/">
                      <img src={googlePlay} alt="google_play_icon" />
                    </a>
                    <a href="/" href="/">
                      <img src={appStore} alt="app_store_icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="social_links flex items-center justify-between flex-wrap">
                <ul className="list-unstyled social">
                  <li>
                    <a href="/" href="/" aria-label="facebook">
                      <i className="pi pi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/" href="/" aria-label="twitter">
                      <i className="pi pi-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/" href="/" aria-label="linked in">
                      <i className="pi pi-linkedin"></i>
                    </a>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">Contact Us</a>
                  </li>
                  <li>
                    <a href="/">Terms of use</a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="copyrights py-2 text-center text-text-dark">
              Copyrights
              <bdi>
                2023 ©Lawyer • Designed by
                <a href="/" href="https://alalmiyalhura.com" target="_blank">
                  Alalamyia
                </a>
              </bdi>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
