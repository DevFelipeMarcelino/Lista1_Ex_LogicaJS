function clicar() {
    var num1= document.querySelector(".num1").value;
    var num2= document.querySelector(".num2").value;
    var Multiplicacao= parseInt(num1) * parseInt(num2);
    document.querySelector(".Multiplicacao").innerHTML = Multiplicacao;
    }