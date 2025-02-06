import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

const swiper = new Swiper("#skills", {
  loop: true,
  spaceBetween: 40,
  slidesPerView: "auto",
  touchMoveStopPropagation: false,
  autoHeight: false,
  pagination: false,
  navigation: false,
  slideToClickedSlide: false,
  allowTouchMove: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
