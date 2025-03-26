particlesJS('particles-js', {
    particles: {
      number: {
        value: 160,
        density: { enable: true, value_area: 800 }
      },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false }
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
  