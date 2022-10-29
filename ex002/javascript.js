function clicar() {
    var num1= document.querySelector(".num1").value;
    var sucessor= parseInt(num1) - parseInt(1);
    document.querySelector(".sucessor").innerHTML = sucessor;
    }