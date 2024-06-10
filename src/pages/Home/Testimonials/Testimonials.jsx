import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure("/reviews").then((res) => setReviews(res.data));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle subHeading="What Our Client Say" heading={"Testimonials"}></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]}>
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating style={{ maxWidth: 250 }} value={review.rating} readOnly />
              <FaQuoteLeft className="text-8xl mt-8" />
              <p className="py-8 text-center">{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
