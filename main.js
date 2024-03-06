document.addEventListener("DOMContentLoaded", () => {
    const url = "https://uselessfacts.jsph.pl/api/v2/facts/random";
  
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao receber os dados");
        }
        return response.json();
      })
      .then((data) => {
       console.log(data);
      })
      .catch((err) => console.log(err));
  });
  
  
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    // const select = document.getElementById("select").text;
  
    const url = `https://uselessfacts.jsph.pl/api/v2/facts/random`;
  
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao receber os dados");
        }
        return response.json();
      })
      .then((data) => {
        criarPiada(data);
      })
      .catch((err) => console.log(err));
  });
  
  function criarPiada(piada) {
    const joke = document.getElementById('joke');
    joke.innerHTML = piada.text;
  }

  const hamburguer = document.querySelector(".hamburguer")
  const navMenu = document.querySelector(".navmenu")
  hamburguer.addEventListener("click", ()=>{
     hamburguer.classList.toggle('active')
     navMenu.classList.toggle('active')
  })