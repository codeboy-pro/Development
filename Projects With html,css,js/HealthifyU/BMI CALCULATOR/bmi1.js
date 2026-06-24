// Initialize Locomotive Scroll and animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true },
        multiplier: 0.8,
        inertia: 0.8
    });

    // Page load animation
    function loadingAnimation() {
        gsap.registerPlugin(ScrollTrigger);
        
        // Animate sections in
        gsap.to("[data-scroll-section]", {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out"
        });
        
        // Animate calculator container
        gsap.to(".container", {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: 0.3
        });
        
        // Animate guide items
        gsap.to(".guide-item", {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.5,
            ease: "power2.out"
        });
    }
    
    loadingAnimation();
    
    // Update ScrollTrigger when Locomotive Scroll updates
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // Tell ScrollTrigger to use these proxy methods
    ScrollTrigger.scrollerProxy("[data-scroll-container]", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
    });
    
    // Refresh ScrollTrigger and Locomotive Scroll when everything is loaded
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    // BMI Calculator Functionality
    document.getElementById('bmiForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);
        const results = document.querySelector('#results');
        
        // Clear previous results
        results.innerHTML = '';
        results.className = 'mt-6 text-center text-xl font-semibold p-4 rounded-lg';
        
        // Validate inputs
        if (isNaN(height) || height <= 0) {
            results.textContent = 'Please enter a valid height';
            results.classList.add('bg-red-100', 'text-red-700');
            results.classList.remove('hidden');
            
            // Shake animation for error
            gsap.to("#height", {
                x: [-5, 5, -5, 5, 0],
                duration: 0.4,
                ease: "power1.out"
            });
            return;
        }
        
        if (isNaN(weight) || weight <= 0) {
            results.textContent = 'Please enter a valid weight';
            results.classList.add('bg-red-100', 'text-red-700');
            results.classList.remove('hidden');
            
            // Shake animation for error
            gsap.to("#weight", {
                x: [-5, 5, -5, 5, 0],
                duration: 0.4,
                ease: "power1.out"
            });
            return;
        }
        
        // Calculate BMI
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        
        // Display results with animation
        results.classList.remove('hidden');
        
        if (bmi <= 18.6) {
            results.textContent = `Your BMI: ${bmi} (Underweight)`;
            results.classList.add('result-underweight');
        } else if (bmi > 18.6 && bmi <= 24.9) {
            results.textContent = `Your BMI: ${bmi} (Normal Range)`;
            results.classList.add('result-normal');
        } else {
            results.textContent = `Your BMI: ${bmi} (Overweight)`;
            results.classList.add('result-overweight');
        }
        
        // Animate results appearance
        gsap.from(results, {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
        });
    });
});