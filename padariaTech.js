function multiply() {
  var p = document.getElementById("preco").value;
  var out = "Panificadora Pão de Ontem - Tabela de preços:" + "<br/>";
  for (var i = 1; i <= 50; i++) {
    out = out + i + " * " + p + " = " + i * p + "<br/>";
  }
  document.getElementById("result").innerHTML = out;
}
