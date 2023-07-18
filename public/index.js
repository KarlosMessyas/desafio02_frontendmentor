window.addEventListener("load", ()=>{
    const buttonOne = document.getElementsByClassName("numbers")[0];
    buttonOne.addEventListener("click", () => {
        if (buttonOne.hasAttribute("id")) {
            buttonOne.removeAttribute("id");
        } else {
            buttonOne.setAttribute("id", "numberOne");
        }
        const botao = document.querySelector("button");
        botao.addEventListener("click", ()=>{
            window.location.href = "../hatesPages/hateOne.html";
        });
    });

    const buttonTwo = document.getElementsByClassName("numbers")[1];
    buttonTwo.addEventListener("click", () => {
        if (buttonTwo.hasAttribute("id")) {
            buttonTwo.removeAttribute("id");
        } else {
            buttonTwo.setAttribute("id", "numberOne");
        }
        const botao = document.querySelector("button");
        botao.addEventListener("click", ()=>{
            window.location.href = "../hatesPages/hateTwo.html";
        });
    });

    const buttonThree = document.getElementsByClassName("numbers")[2];
    buttonThree.addEventListener("click", () => {
        if (buttonThree.hasAttribute("id")) {
            buttonThree.removeAttribute("id");
        } else {
            buttonThree.setAttribute("id", "numberOne");
        }
        const botao = document.querySelector("button");
        botao.addEventListener("click", ()=>{
            window.location.href = "../hatesPages/hateThree.html";
        });
    });

    const buttonFour = document.getElementsByClassName("numbers")[3];
    buttonFour.addEventListener("click", () => {
        if (buttonFour.hasAttribute("id")) {
            buttonFour.removeAttribute("id");
        } else {
            buttonFour.setAttribute("id", "numberOne");
        }
        const botao = document.querySelector("button");
        botao.addEventListener("click", ()=>{
            window.location.href = "../hatesPages/hateFour.html";
        });
    });

    const buttonFive = document.getElementsByClassName("numbers")[4];
    buttonFive.addEventListener("click", () => {
        if (buttonFive.hasAttribute("id")) {
            buttonFive.removeAttribute("id");
        } else {
            buttonFive.setAttribute("id", "numberOne");
        }
        const botao = document.querySelector("button");
        botao.addEventListener("click", ()=>{
            window.location.href = "../hatesPages/hateFive.html";
        });
    });
});