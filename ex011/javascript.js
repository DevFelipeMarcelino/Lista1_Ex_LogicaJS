function clicar() {
    var B= document.querySelector(".B").value;
    var b= document.querySelector(".b").value;
    var h= document.querySelector(".h").value;
    var area= parseInt(B) * parseInt(b) * parseInt(h) / 2;
    document.querySelector(".area").innerHTML = area;
    }