const HomeSlider = () => {
  return (
    <div className="home_slider pt-44 pb-24 min-h-[85vh] flex items-center">
      <div className="container mx-auto">
        <div className="w-full md:w-1/2">
          <h1 className="title text-white text-2xl xl:text-7xl md:text-3xl">
            Expert <span className="text-primary">Advisory legal </span> Service
          </h1>

          <p className="desc text-white text-xl mt-4">
            The firm was established in 1990 in Kolkata, India as an
            Intellectual Property Law Firm.
          </p>

          <div className="actions mt-11">
            {/* <nuxt-link className="base-btn" :to="localePath('/')">
            {{ $t("NAV.contactUs") }}
          </nuxt-link>
          <nuxt-link className="base-link" :to="localePath('/')">
            {{ $t("BUTTONS.seeMore") }}

            <i
              className="pi"
              :className="
                $i18n.locale == 'en'
                  ? ' pi-arrow-up-right'
                  : ' pi-arrow-up-left'
              "
            ></i>
          </nuxt-link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;

// <script>
// export default {};
// </script>

// <style lang="scss">
// .home_slider {
//   background: url("~/assets/images/slider.svg");
//   background-size: cover;
// }
// </style>
