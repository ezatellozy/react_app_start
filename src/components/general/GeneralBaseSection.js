const GeneralBaseSection = (props) => {
  const sectionData = props.sectionData;
  return (
    <div className="base_section_wrapper">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          {sectionData.image && (
            <div className="image_wrapper mb-8 md:mb-0 md:w-1/2">
              <figure>
                <img
                  src={sectionData.image}
                  className="h-auto rounded-lg"
                  alt="left section banner"
                />
              </figure>
            </div>
          )}
          <div className="text_section_wrapper ps-4 md:w-1/2">
            {sectionData.icon && (
              <div className="icon_wrapper">
                <img
                  src={sectionData.icon}
                  width="20"
                  height="20"
                  alt="court icon"
                />
              </div>
            )}

            <div
              className="main_title mb-3"
              dangerouslySetInnerHTML={{ __html: sectionData.title }}
            ></div>
            <div
              className="main_description"
              dangerouslySetInnerHTML={{ __html: sectionData.description }}
            ></div>
            <button className="base-btn  mt-8">{props.route.name}</button>
            {/* <nuxt-link
            v-if="route"
            :to="localePath(route)"
            className="base-link mt-8"
          >
            {{ $t("BUTTONS.readMore") }}
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

export default GeneralBaseSection;
