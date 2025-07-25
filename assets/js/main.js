/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixer = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */
const workLinks = document.querySelectorAll(".work__item");

function activeWork(workLink) {
  workLinks.forEach((wl) => {
    wl.classList.remove("active-work");
  });
  workLink.classList.add("active-work");
}

workLinks.forEach((wl) => {
  wl.addEventListener("click", () => {
    activeWork(wl);
  });
});


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
  
  loadParticles(getCurrentTheme());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`.nav__menu`, { delay: 100, scale: 0.1, origin: "bottom", distance: "300px"});
sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, { delay: 100 });
sr.reveal(`.home__social, .home__scroll`, { delay: 100, origin: "bottom" });
sr.reveal(`.about__img`, { delay: 100, origin: "left", scale: 0.9, distance: "30px" });
sr.reveal(`.about__data, .about__description, .about__button-contact`, { delay: 100, scale: 0.9, origin: "right", distance: "30px" });
sr.reveal(`.skills__content`, { delay: 100, scale: 0.9, origin: "bottom", distance: "30px" });
sr.reveal(`.services__title, services__button`, { delay: 100, scale: 0.9, origin: "top", distance: "30px" });
sr.reveal(`.work__card`, { delay: 100, scale: 0.9, origin: "bottom", distance: "30px" });
sr.reveal(`.testimonial__container`, { delay: 100, scale: 0.9, origin: "bottom", distance: "30px" });
sr.reveal(`.contact__info, .contact__title-info`, { delay: 100, scale: 0.9, origin: "left", distance: "30px" });
sr.reveal(`.contact__form, .contact__title-form`, { delay: 100, scale: 0.9, origin: "right", distance: "30px" });
sr.reveal(`.footer, footer__container`, { delay: 100, scale: 0.9, origin: "bottom", distance: "30px" });


/*=============== INTERACTIVE BACKGROUND WITH ANIMATIONS ===============*/

function loadParticles(theme) {
  const particleColors = ['#007aff', '#00c4ff', '#7a67ee']; 
  let linkColor;

  if (theme === 'light') {
    linkColor = '#a0a0a0'; 
  } else {
    linkColor = '#ffffff'; 
  }

  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: particleColors
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.8,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      links: {
        enable: true,
        distance: 150,
        color: {
          value: linkColor
        },
        opacity: 0.4,
        width: 1,
        triangles: {
          enable: true,
          color: {
              value: "#1a2a45"
          },
          opacity: 0.05
        }
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          // --- UPDATED: Connect mode added
          mode: ["repulse", "connect"] 
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100
        },
        push: {
          particles_nb: 4
        },
        // --- NEW: Configuration for the connect mode
        connect: {
          distance: 80,
          links: {
            opacity: 0.5
          },
          radius: 150
        }
      }
    },
    detectRetina: true
  });
}

// Initial load of the particles based on the current theme
loadParticles(getCurrentTheme());