document.addEventListener('DOMContentLoaded', function() {
  const boards = document.querySelectorAll('.mini-chalkboard');
  const observer = new window.IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('hovered');
        observer.unobserve(entry.target); // לא להפעיל שוב
      }
    });
  }, { threshold: 0.5 });

  boards.forEach(board => observer.observe(board));
});