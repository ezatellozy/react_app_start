import icno from "../../assets/images/icons/icno2.svg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomeSolutions = () => {
  const breakpoints = {
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };
  return (
    <div className="solution_section_swiper">
      <h2 className="title translate-y-20 w-10/12 xl:w-6/12 font-medium">
        <span>Law Solutions</span> to solve your problems
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={breakpoints}
        navigation
      >
        <SwiperSlide>
          <div className="solution_card rounded-2xl bg-[#F5FBFF] p-8">
            <div className="icon mb-20">
              <img src={icno} alt="icon" />
            </div>
            <div className="card_content">
              <h3 className="text-secondary text-xl font-bold capitalize mb-2">
                criminal
              </h3>
              <p className="text-[#697E95] w-9/12">
                benefits beyond legal support
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="solution_card rounded-2xl bg-[#F5FBFF] p-8">
            <div className="icon mb-20">
              <img src={icno} alt="icon" />
            </div>
            <div className="card_content">
              <h3 className="text-secondary text-xl font-bold capitalize mb-2">
                criminal
              </h3>
              <p className="text-[#697E95] w-9/12">
                benefits beyond legal support
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="solution_card rounded-2xl bg-[#F5FBFF] p-8">
            <div className="icon mb-20">
              <img src={icno} alt="icon" />
            </div>
            <div className="card_content">
              <h3 className="text-secondary text-xl font-bold capitalize mb-2">
                criminal
              </h3>
              <p className="text-[#697E95] w-9/12">
                benefits beyond legal support
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="solution_card rounded-2xl bg-[#F5FBFF] p-8">
            <div className="icon mb-20">
              <img src={icno} alt="icon" />
            </div>
            <div className="card_content">
              <h3 className="text-secondary text-xl font-bold capitalize mb-2">
                criminal
              </h3>
              <p className="text-[#697E95] w-9/12">
                benefits beyond legal support
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="solution_card rounded-2xl bg-[#F5FBFF] p-8">
            <div className="icon mb-20">
              <img src={icno} alt="icon" />
            </div>
            <div className="card_content">
              <h3 className="text-secondary text-xl font-bold capitalize mb-2">
                criminal
              </h3>
              <p className="text-[#697E95] w-9/12">
                benefits beyond legal support
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="solution_card rounded-2xl bg-[#F5FBFF] p-8">
            <div className="icon mb-20">
              <img src={icno} alt="icon" />
            </div>
            <div className="card_content">
              <h3 className="text-secondary text-xl font-bold capitalize mb-2">
                criminal
              </h3>
              <p className="text-[#697E95] w-9/12">
                benefits beyond legal support
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="solution_card rounded-2xl bg-[#F5FBFF] p-8">
            <div className="icon mb-20">
              <img src={icno} alt="icon" />
            </div>
            <div className="card_content">
              <h3 className="text-secondary text-xl font-bold capitalize mb-2">
                criminal
              </h3>
              <p className="text-[#697E95] w-9/12">
                benefits beyond legal support
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="solution_card rounded-2xl bg-[#F5FBFF] p-8">
            <div className="icon mb-20">
              <img src={icno} alt="icon" />
            </div>
            <div className="card_content">
              <h3 className="text-secondary text-xl font-bold capitalize mb-2">
                criminal
              </h3>
              <p className="text-[#697E95] w-9/12">
                benefits beyond legal support
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSolutions;
