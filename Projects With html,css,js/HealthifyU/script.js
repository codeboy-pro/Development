document.addEventListener("DOMContentLoaded", function () {
  // Create shape wipe overlay
  const overlay = document.createElement("div");
  overlay.className = "shape-wipe-overlay";
  overlay.innerHTML = '<div class="shape-wipe"></div>';
  document.body.appendChild(overlay);

  // Remove overlay after animation completes
  setTimeout(() => {
    overlay.style.display = "none";
    document.body.removeChild(overlay);
  }, 1200);

  // Initialize Locomotive Scroll with GSAP ScrollTrigger integration
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    smartphone: { smooth: true },
    tablet: { smooth: true },
    multiplier: 0.8,
    inertia: 0.8,
  });

  // Create page transition element
  const pageTransition = document.createElement("div");
  pageTransition.className = "page-transition";
  document.body.appendChild(pageTransition);

  // Handle all link clicks for smooth transitions
  document.querySelectorAll("a").forEach((link) => {
    // Skip external links, mailto, tel, and anchor links
    if (
      link.href &&
      !link.href.startsWith("mailto:") &&
      !link.href.startsWith("tel:") &&
      !link.href.startsWith("javascript:") &&
      link.href !== "#" &&
      link.target !== "_blank"
    ) {
      link.addEventListener("click", function (e) {
        // Skip if it's an anchor link on the same page
        if (
          this.getAttribute("href").startsWith("#") &&
          this.href.split("#")[0] === window.location.href.split("#")[0]
        ) {
          return;
        }

        e.preventDefault();
        const href = this.getAttribute("href");

        // Add transitioning class to body
        document.body.classList.add("transitioning");

        // Start transition animation
        pageTransition.classList.remove("active");
        void pageTransition.offsetWidth; // Trigger reflow
        pageTransition.classList.add("active");

        // Navigate after animation completes
        setTimeout(() => {
          window.location.href = href;
        }, 600);
      });
    }
  });

  // On page load, play the reverse animation
  window.addEventListener("load", () => {
    pageTransition.classList.add("page-transition-in");
    setTimeout(() => {
      pageTransition.classList.remove("page-transition-in");
      document.body.classList.remove("transitioning");
    }, 600);

    locoScroll.update();
  });

  // Update Locomotive when window resizes
  window.addEventListener("resize", () => {
    locoScroll.update();
  });

  // Mobile Menu Toggle
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    locoScroll.update();
  });

  // Smooth scrolling for anchor links using Locomotive
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // Skip if we're already handling this link
      if (this.classList.contains("no-transition")) return;

      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        locoScroll.scrollTo(targetElement);
      }
    });
  });

  // Page load animation
  function loadingAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial state
    gsap.set("[data-scroll-section]", { opacity: 0, y: 50 });

    // Animate the entire page in
    gsap.to("[data-scroll-section]", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power2.out",
    });

    // Hero section animation
    gsap.from(".hero-text", {
      x: -100,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out",
    });

    gsap.from(".hero-image", {
      x: 100,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out",
    });

    // Features animation
    gsap.from(".feature-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#features",
        start: "top 80%",
        scroller: "[data-scroll-container]",
        toggleActions: "play none none none",
      },
    });

    // Stats animation
    gsap.from(".stat-item", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".stats-section",
        start: "top 80%",
        scroller: "[data-scroll-container]",
        toggleActions: "play none none none",
      },
    });
  }

  loadingAnimation();

  // Update ScrollTrigger when Locomotive Scroll updates
  locoScroll.on("scroll", ScrollTrigger.update);

  // Tell ScrollTrigger to use these proxy methods
  ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("[data-scroll-container]").style.transform
      ? "transform"
      : "fixed",
  });

  // Refresh ScrollTrigger and Locomotive Scroll when everything is loaded
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
});
