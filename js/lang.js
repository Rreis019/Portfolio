var buttonsPt = document.querySelectorAll(".lang-pt");
var buttonsEng = document.querySelectorAll(".lang-en");

//json com selector e o texto

function changeToPt(){
    for (let index = 0; index < buttonsPt.length; index++) {
        buttonsPt[index].classList.replace("btn-lang-primary","btn-lang-secondary");
    }

    for (let index = 0; index < buttonsEng.length; index++) {
        buttonsEng[index].classList.replace("btn-lang-secondary","btn-lang-primary");
    }

}

function changeToEng()
{
    for (let index = 0; index < buttonsPt.length; index++) {
        buttonsPt[index].classList.replace("btn-lang-secondary","btn-lang-primary");
    }

    for (let index = 0; index < buttonsEng.length; index++) {
        buttonsEng[index].classList.replace("btn-lang-primary","btn-lang-secondary");
    }
}

for (let index = 0; index < buttonsPt.length; index++) {buttonsPt[index].addEventListener("click",changeToPt);}
for (let index = 0; index < buttonsPt.length; index++) {buttonsEng[index].addEventListener("click",changeToEng);}