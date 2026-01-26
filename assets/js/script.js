  /* BACK TO TOP */
      const backToTop = document.getElementById("backToTop");
      window.addEventListener("scroll", () => {
        backToTop.style.display = window.scrollY > 400 ? "block" : "none";
      });
      backToTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

      /* MOBILE MENU + HAMBURGER */
     document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("open");
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("active");
    });
  });
});


      /* SLIDER + DOTS */
      const slides = document.querySelectorAll(".slide");
      const slider = document.getElementById("bannerSlider");
      const dotsContainer = document.getElementById("bannerDots");

      let currentSlide = 0;

      slides.forEach((_, index) => {
        const dot = document.createElement("span");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => {
          currentSlide = index;
          updateSlider();
        });
        dotsContainer.appendChild(dot);
      });

      const dots = dotsContainer.querySelectorAll("span");

      function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((dot) => dot.classList.remove("active"));
        dots[currentSlide].classList.add("active");
      }

      setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
      }, 5000);

      const year = new Date().getFullYear();
      document.getElementById("year").textContent = new Date().getFullYear();