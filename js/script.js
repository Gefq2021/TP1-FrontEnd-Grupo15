// Clickear el botón de CONOCENOS y que nos deslice a la descripción de nuestro grupo
const aboutUsBtn = document.getElementById("about-us-btn");
const aboutUsSection = document.getElementById("about-us");

if (aboutUsBtn && aboutUsSection) {
  aboutUsBtn.addEventListener("click", () => {
    aboutUsSection.scrollIntoView({
      behavior: "smooth",
    });
  });
}

// Mostrar una frase de cada personaje en cada tarjeta
const quoteJon = document.getElementById("quote-jon");
const quoteDaenerys = document.getElementById("quote-daenerys");
const quoteJaime = document.getElementById("quote-jaime");
const quoteTyrion = document.getElementById("quote-tyrion");

const showQuote = (name, quote) => {
  alert(`Frase de ${name}:\n\n"${quote}"`);
};

if (quoteJon) {
  quoteJon.addEventListener("click", () => {
    showQuote(
      "Jon Snow",
      "Quiero pelear del lado que pelea por los que viven."
    );
  });
}

if (quoteDaenerys) {
  quoteDaenerys.addEventListener("click", () => {
    showQuote(
      "Daenerys Targaryen",
      "Cuando mis dragones crezcan, vamos a recuperar lo que me robaron y destruiremos a aquellos que me hicieron daño!"
    );
  });
}

if (quoteJaime) {
  quoteJaime.addEventListener("click", () => {
    showQuote(
      "Jaime Lannister",
      "Los héroes siempre serán recordados. Los mejores y los peores. Y algunos que fueron un poco de ambos."
    );
  });
}

if (quoteTyrion) {
  quoteTyrion.addEventListener("click", () => {
    showQuote(
      "Tyrion Lannister",
      "Nunca olvides lo que eres. El resto del mundo no lo hará. Úsalo como una armadura y nunca podrá usarse para hacerte daño."
    );
  });
}
