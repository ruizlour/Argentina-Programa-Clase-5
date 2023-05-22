$botonCalcular = document.querySelector("#botonCalcular");
let salarioAnual;
let salarioMensual;

$resultado = document.querySelector("#salario-mensual");
$botonCalcular.onclick = function() {
 salarioAnual = document.querySelector("#sueldo").value;
 salarioMensual = salarioAnual / 12;
 $resultado.placeholder = (`Tu salario mensual es ${salarioMensual}`);
 return false
}
