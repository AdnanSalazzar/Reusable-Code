initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const sliderScrollbar = document.querySelector(
    ".container1 .slider-scrollbar"
  );
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const slideButtons = document.querySelectorAll(
    ".slider-wrapper .slide-button"
  );
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  console.log(slideButtons); ///in here  shows the two button elements
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // console.log(button);// show each of them

      // Handle scrollbar thumb drag
      scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition =
          sliderScrollbar.getBoundingClientRect().width -
          scrollbarThumb.offsetWidth;

        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;
          // Ensure the scrollbar thumb stays within bounds
          const boundedPosition = Math.max(
            0,
            Math.min(maxThumbPosition, newThumbPosition)
          );
          const scrollPosition =
            (boundedPosition / maxThumbPosition) * maxScrollLeft;

          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
        };
        // Remove event listeners on mouse up
        const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
        };
        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      });

      // Slide images according to the slide button clicks
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });

      //handling the arrow buttons dissapearing at max positions
      const handleSlideButtons = () => {
        // console.log(imageList.scrollLeft);

        slideButtons[0].style.display =
          imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display =
          imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
      };

      // Update scrollbar thumb position based on image scroll
      const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition =
          (scrollPosition / maxScrollLeft) *
          (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
      };

      imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
      });
    });
  });
};

window.addEventListener("load", initSlider);
