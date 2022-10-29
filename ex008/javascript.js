function clicar() {
    var base= document.querySelector(".base").value;
    var altura= document.querySelector(".altura").value;
    var area= parseInt(base) * parseInt(altura) / parseInt(2);
    document.querySelector(".area").innerHTML = area;
    }