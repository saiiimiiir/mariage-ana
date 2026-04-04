document.addEventListener('DOMContentLoaded', () => {
  // Date du mariage: 11 Juillet 2026 (format: YYYY-MM-DDTHH:mm:ss)
  const weddingDate = new Date("2026-07-11T00:00:00").getTime();

  const daysElement = document.getElementById('cd-days');
  const hoursElement = document.getElementById('cd-hours');
  const minutesElement = document.getElementById('cd-minutes');
  const secondsElement = document.getElementById('cd-seconds');

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
      // Le mariage est passé
      if (daysElement) daysElement.innerText = "00";
      if (hoursElement) hoursElement.innerText = "00";
      if (minutesElement) minutesElement.innerText = "00";
      if (secondsElement) secondsElement.innerText = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysElement) daysElement.innerText = days.toString().padStart(2, '0');
    if (hoursElement) hoursElement.innerText = hours.toString().padStart(2, '0');
    if (minutesElement) minutesElement.innerText = minutes.toString().padStart(2, '0');
    if (secondsElement) secondsElement.innerText = seconds.toString().padStart(2, '0');
  }

  // Mettre à jour toutes les secondes
  setInterval(updateCountdown, 1000);
  // Appel initial pour éviter le délai d'une seconde blancc
  updateCountdown();

  // ============================================
  // Scroll Animations (Intersection Observer)
  // ============================================
  const scrollElements = document.querySelectorAll('.scroll-animate');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });

  scrollElements.forEach((el) => observer.observe(el));
});
