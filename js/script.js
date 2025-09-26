const aboutUsBtn = document.getElementById('about-us-btn');
const aboutUsSection = document.getElementById('about-us');

aboutUsBtn.addEventListener('click', () => {
  aboutUsSection.scrollIntoView({
    behavior: 'smooth' // Usamos smooth para que el desplazamiento se haga de manera suave y no tan instantaneo.
  });
});