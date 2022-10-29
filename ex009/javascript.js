function clicar() {
    var lado= document.querySelector(".lado").value;
    var area= parseInt(lado) * parseInt(lado);
    document.querySelector(".area").innerHTML = area;
    }