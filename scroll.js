
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate the pillar
gsap.to(".pillar", {
    scrollTrigger: {
        trigger: ".second-section",
        start: "top top", // Start the animation when top of second-section hits the top of viewport
        end: "bottom bottom", // End the animation when bottom of second-section hits the bottom of viewport
        scrub: true,
    },
    height: "200vh" // Grow the pillar to the full height of the section
});

// Animate the branches opacity and position
gsap.utils.toArray(".branch").forEach((branch) => {
    gsap.to(branch, {
        scrollTrigger: {
            trigger: branch,
            start: "top 80%", // Start the animation when branch hits 80% of the viewport height
            end: "top 50%", // End the animation when branch hits 50% of the viewport height
            scrub: true,
        },
        opacity: 1,
        y: 0
    });
});

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".containe",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".containe").offsetWidth
    }
});
