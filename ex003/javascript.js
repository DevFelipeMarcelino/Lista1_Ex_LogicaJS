function clicar() {
    var num1= parseInt( document.querySelector(".num1").value);
    var num2= parseInt(document.querySelector(".num2").value);
    var soma= num1 + num2;
    document.querySelector(".soma").innerHTML = soma;
    }