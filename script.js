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