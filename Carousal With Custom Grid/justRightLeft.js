initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    
    const slideButtons = document.querySelectorAll(
      ".slide-buttons .slide-button"
    );

    console.log(slideButtons); ///in here  shows the two button elements
    slideButtons.forEach((button) => {
      button.addEventListener("click", () => {
        console.log(button);// show each of them

        // Slide images according to the slide button clicks
        const direction = button.id === "prev-slide" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });
  };
  
  window.addEventListener("load", initSlider);
  