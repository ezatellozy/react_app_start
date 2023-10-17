import AuthLogin from "../../components/auth/AuthLogin";

export default function Login() {
  function submit(e) {
    e.preventDefaults();
    console.log("TEST");
  }

  return (
    <div className="auth_login">
      <form onSubmit={submit} className="w-full md:max-w-xl mx-auto xl:mx-0">
        {/* // <nuxt-link
      //   :to="localePath('/auth/login-type')"
      //   className="text-lg text-text-dark mb-5 block font-medium"
      // >
      //   <i
      //     className="pi text-base me-1"
      //     :className="$i18n.locale == 'ar' ? 'pi-arrow-right' : 'pi-arrow-left'"
      //   ></i>
      //   {{ $t("BUTTONS.back") }}
      // </nuxt-link> */}
        <h1 className="text-4xl md:text-5xl capitalize font-bold mb-11">
          {/* <span className="text-4xl leading-9">{t("HEADERS.hello")}</span> */}
          <br />
          {/* {t("HEADERS.welcomeBack")} */}
        </h1>

        <div className="login_type">
          <AuthLogin />
        </div>
      </form>
    </div>
  );
}
