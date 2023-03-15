import Carousel from 'react-bootstrap/Carousel';

function LandingPageCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
      <div className="col-lg-3 text-center bg-secondary" style={{height:"600px", width:"auto"}}></div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="col-lg-3 text-center bg-primary" style={{height:"600px", width:"auto"}}></div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="col-lg-3 text-center bg-danger" style={{height:"600px", width:"auto"}}></div>
      </Carousel.Item>
    </Carousel>
  );
}

export default LandingPageCarousel;