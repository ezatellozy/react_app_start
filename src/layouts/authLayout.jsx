import { Outlet, Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.svg";
import language from "../assets/images/icons/language.svg";
import classes from "./auth_layout.module.scss";
import { useTranslation } from "react-i18next";

export default function AuthLayout() {
  const { t, i18n } = useTranslation();
  function changeLocale(lang) {
    i18n.changeLanguage(lang == "ar" ? "en" : "ar");
    localStorage.setItem("app_lang", i18n.language);
  }

  return (
    <div className={`${classes.auth_layout} min-h-[100vh] flex flex-wrap`}>
      <div className="w-full xl:w-1/2">
        <div className="container">
          <header className="xl:ps-11">
            <nav className="flex items-center justify-between py-8">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo image" />
                </Link>
              </div>
              <div className="language">
                <button
                  className="flex items-center"
                  onClick={() => changeLocale(i18n.language)}
                >
                  <img className="me-2" src={language} alt="lang icon" />
                  <span className="font-meduim text-lg text-primary">
                    {t(`locale.${i18n.language}`)}
                  </span>
                </button>
              </div>
            </nav>
          </header>

          <section className="pt-4 xl:ps-11 xl:pt-11">
            <Outlet />
          </section>
        </div>
      </div>
      <div className={`${classes.image_bg} hidden  xl:flex w-1/2 `}></div>
    </div>
  );
}
