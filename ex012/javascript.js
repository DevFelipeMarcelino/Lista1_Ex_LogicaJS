function clicar() {
    var raio= document.querySelector(".raio").value;
    var area= parseInt(raio) * parseInt(raio) * Math.PI;
    document.querySelector(".area").innerHTML = area;
    }