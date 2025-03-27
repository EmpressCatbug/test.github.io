// ---------- Typing Animation ----------
const roles = [
    "Software Developer",
    "UI/UX Designer",
    "Full Stack Engineer",
    "Star-gazer"
  ];
  
  let roleIndex = 0;
  let charIndex = 0;
  const typingElement = document.getElementById("typing");
  const cursor = document.querySelector(".cursor");
  let typingSpeed = 100;
  let pauseBetweenRoles = 1500;
  
  function type() {
    if (charIndex < roles[roleIndex].length) {
      typingElement.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, pauseBetweenRoles);
    }
  }
  
  function erase() {
    if (charIndex > 0) {
      typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 60);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 300);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    if (roles.length) setTimeout(type, 500);
  
    const butterfly = document.querySelector(".butterfly-cursor");
  
    document.addEventListener("mousemove", (e) => {
      const offsetX = -30;
      const offsetY = -30;
      const x = e.clientX + offsetX;
      const y = e.clientY + offsetY;
  
      // Move butterfly
      butterfly.style.transform = `translate(${x}px, ${y}px)`;
  
      // Add sparkle at butterfly position
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = `${x + 25}px`; // adjust slightly behind the wings
      sparkle.style.top = `${y + 25}px`;
      sparkleContainer.appendChild(sparkle);
  
      setTimeout(() => sparkle.remove(), 500);
    });
  });
  