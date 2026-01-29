import Slider from "react-slick";
import DealCard from "./DealCard";

const Deal = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 700,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="py-4 px-4 lg:px-20">
      <Slider {...settings}>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
          <div key={index} className="px-2">
            <DealCard
              deal={{
                image:
                  "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQc-cZH8UUPg6ALNCskk4c9tocmRFlERyjJ5eQzT2gNHxNdDl5YUDmK-6wP1JPCqpSqSjg4GmNBZiHIwlgm3lZBkO_WxcN-My0H74GG3smYtTEvsu8Oozl1pQ",
                discount: 50,
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Deal;
