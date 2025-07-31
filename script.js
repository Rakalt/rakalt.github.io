// Go To Top Button
const topBtn = document.getElementById('topBtn');
window.onscroll = () => {
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Centralize Anchors
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        const yOffset = -window.innerHeight / 2 + target.offsetHeight / 2;
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
        window.scrollTo({
          top: y,
          behavior: "smooth"
        });
      }
    });
  });

// Scroll spy
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll("#toc a");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute("id");
      const tocLink = document.querySelector(`#toc a[href="#${id}"]`);
      
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove("active"));
        tocLink?.classList.add("active");
      }
    });
  }, {
    threshold: 0.5
  });

  sections.forEach(section => observer.observe(section));
});