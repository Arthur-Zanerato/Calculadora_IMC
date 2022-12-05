var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var pesoTd = paciente.querySelector(".info-peso");
  var peso = pesoTd.textContent;

  var alturaTd = paciente.querySelector(".info-altura");
  var altura = alturaTd.textContent;

  var imcTd = paciente.querySelector(".info-imc");

  var verificaPeso = validaPeso(peso); //true ou false
  var verificaAltura = validaAltura(altura);

  if (!verificaPeso) {
    console.log("Peso inválido!");
    verificaPeso = false;
    pesoTd.textContent = "Peso inválido!";
    paciente.classList.add("paciente-erro");
  }

  if (!verificaAltura) {
    console.log("Altura inválida!");
    verificaAltura = false;
    alturaTd.textContent = "Altura inválida!";
    paciente.classList.add("paciente-erro");
  }

  if (verificaPeso && verificaAltura) {
    var imc = calculaImc(peso, altura);
    imcTd.textContent = imc;
  }
}

function validaPeso(peso) {
  if (peso >= 0 && peso <= 500) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.00) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
