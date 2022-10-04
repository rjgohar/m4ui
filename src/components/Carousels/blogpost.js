import Carousel from "../carousel";

const BlogpostCarousel = ({ children }) => {
  const responsive = [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
      },
    },
  ];
  return (
    <Carousel slidesToShow={3} responsive={responsive}>
      {children}
    </Carousel>
  );
};

export default BlogpostCarousel;
