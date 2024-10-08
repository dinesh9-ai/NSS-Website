import React from "react";
import './Carousel.css';
function Carousel() {
  return (
    <div>
      <div
        id="carouselDarkVariant"
        class="carousel slide carousel-fade carousel-dark mt ty"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="2"
            aria-label="Slide 1"
          ></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../images/slide1.png"
              class="d-block w-100 hero img-fluid"
              alt="Motorbike Smoke"
              height={400}
            />
            {/* <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div> */}
          </div>

          <div class="carousel-item">
            <img
              src="../images/slide2.png"
              class="d-block w-100 hero img-fluid"
              alt="Mountaintop"
              height={400}
            />
            {/* <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div> */}
          </div>

          <div class="carousel-item">
            <img
              src="../images/Carousel/slide3.png"
              class="d-block w-100 hero img-fluid"
              alt="Woman Reading a Book"
              height={400}
            />
            <div class="carousel-caption d-none d-md-block">
              {/* <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
