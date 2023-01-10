function updatePageFromJSON(jsonFileName)
{
    // Abre o arquivo JSON pelo nome
    fetch(jsonFileName)
      .then(response => {
        // Verifica se o arquivo existe
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`O arquivo ${jsonFileName} não pôde ser encontrado.`);
        }
      })
      .then(jsonData => {
        // Da loop em cada elemento do array do JSON
        jsonData.forEach(element => {
          console.log(element);
          // Faz a atualização no elemento HTML correspondente
          document.querySelector(element.selector).innerHTML = element.text;
        });
      })
      .catch(error => {
        console.error(error);
      });
}

var btnLangs = document.querySelectorAll("[languanges]");

for (let index = 0; index < btnLangs.length; index++) {
    btnLangs[index].addEventListener("click", function() 
    {
        var currentLanguange = this.getAttribute("languanges");
        document.documentElement.setAttribute("lang", currentLanguange);

        for (let index = 0; index < btnLangs.length; index++) {
            const element = btnLangs[index];
            
            if(element.getAttribute("languanges") == currentLanguange){
                element.classList.replace("btn-lang-primary","btn-lang-secondary");
            }else{
                element.classList.replace("btn-lang-secondary","btn-lang-primary");
            }
        }
        updatePageFromJSON("langs/" + currentLanguange + ".json");
    });
}