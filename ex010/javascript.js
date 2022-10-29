function clicar() {
    var D= document.querySelector(".D").value;
    var d= document.querySelector(".d").value;
    var area= parseInt(D) * parseInt(d) / parseInt(2);
    document.querySelector(".area").innerHTML = area;
    }