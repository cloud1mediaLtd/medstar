import Review from "./ui/review";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const review = [
  {
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc elit lacinia nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec ultricies ultricies, nunc elit lacinia nunc, eget aliquam massa nisl eget dolor.",
    rating: [5],
    date: "2021-01-01",
  },
  {
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc elit lacinia nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec ultricies ultricies, nunc elit lacinia nunc, eget aliquam massa nisl eget dolor.",
    rating: [5],
    date: "2021-01-01",
  },
  {
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc elit lacinia nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec ultricies ultricies, nunc elit lacinia nunc, eget aliquam massa nisl eget dolor.",
    rating: [5],
    date: "2021-01-01",
  },
  {
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc elit lacinia nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec ultricies ultricies, nunc elit lacinia nunc, eget aliquam massa nisl eget dolor.",
    rating: [5],
    date: "2021-01-01",
  },
  {
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc elit lacinia nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec ultricies ultricies, nunc elit lacinia nunc, eget aliquam massa nisl eget dolor.",
    rating: [5],
    date: "2021-01-01",
  },
];

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      centeredSlides={true}
      grabCursor={true}
      slidesPerView={1}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
          loop: true,
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
          loop: true,
        },
      }}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {review.map((item) => (
        <SwiperSlide className="swiper-slide bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
          <Review
            name={item.name}
            text={item.text}
            rating={item.rating}
            date={item.date}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
