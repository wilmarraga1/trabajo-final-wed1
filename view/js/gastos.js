var valorPrueba = 20000;
let topeMaximo = 10000;

function agregarGasto() {
  var montoInput = document.getElementById("monto");
  var descripcionInput = document.getElementById("descripcion");
  var transationCategoryInput = document.getElementById("transationCategory").value;
  

  var monto = parseFloat(montoInput.value.replace(",", "."));
  var descripcion = descripcionInput.value;
  console.log(descripcion);
  // var transationCategory = transationCategoryInput.value;

  if (isNaN(monto) || monto <= 0 || descripcion.trim() === "") {
    alert("Por favor, ingrese un valor válido ,la categoria y una descripción.");
    return;
  }

  if (monto > valorPrueba - getTotalGastos()) {
    if (!confirm("El gasto sobrepasa el valor de prueba. ¿Desea continuar?")) {
      return;
    }
  }

  var tablaGastos = document.getElementById("tablaGastos");

  var fila = tablaGastos.insertRow();
  var columnaMonto = fila.insertCell(0);
  var columnatransationCategory = fila.insertCell(1);
  var columnaDescripcion = fila.insertCell(2);
  var columnaEliminar = fila.insertCell(3);

  columnaMonto.textContent = monto.toFixed();
  columnatransationCategory.textContent = descripcion;
  columnaDescripcion.textContent = transationCategoryInput;

  var eliminarButton = document.createElement("button");
  eliminarButton.className = "btn btn-danger btn-sm";
  eliminarButton.textContent = "Eliminar";
  eliminarButton.onclick = function () {
    eliminarGasto(fila);
  };
  columnaEliminar.appendChild(eliminarButton);

  montoInput.value = "";
  descripcionInput.value = "";
  transationCategoryInput.value = "";

  actualizarTotalGastos();
  actualizarValorPrueba();
}

function eliminarGasto(fila) {
  var monto = parseFloat(fila.cells[0].textContent);
  var tablaGastos = document.getElementById("tablaGastos");
  tablaGastos.deleteRow(fila.rowIndex - 1); // Restar 1 al índice de fila para ajustar el desfase

  actualizarTotalGastos();
  actualizarValorPrueba(monto);
}

function getTotalGastos() {
  var totalGastos = 0;
  var tablaGastos = document.getElementById("tablaGastos");
  var filas = tablaGastos.getElementsByTagName("tr");

  for (var i = 0; i < filas.length; i++) {
    var celdas = filas[i].getElementsByTagName("td");
    var monto = parseFloat(celdas[0].textContent.replace(",", "."));

    if (!isNaN(monto)) {
      totalGastos += monto;
    }
  }

  return totalGastos;
}

function actualizarTotalGastos() {
  var totalGastosSpan = document.getElementById("totalGastos");
  var totalGastos = getTotalGastos();
  totalGastosSpan.textContent = totalGastos.toFixed(2);
}

function actualizarValorPrueba() {
  var valorPruebaSpan = document.getElementById("valorPrueba");
  var totalGastos = getTotalGastos();
  var valorPruebaRestante = valorPrueba - totalGastos;
  valorPruebaSpan.textContent = valorPruebaRestante.toFixed(2);
}

// Actualizar tope máximo
const topeMaximoMostrar = document.getElementById('topeMaximoMostrar');
    topeMaximoMostrar.textContent = topeMaximo.toFixed();

// porcentaje
const data = {
    labels: ['External', 'Search', 'Direct', 'Pages'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [8, 11, 35.8, 37.5],
            backgroundColor: ['rgb(150, 180, 255)', 'rgb(100, 145, 255)', 'rgb(70, 115, 235)', 'rgb(25, 80, 225)'],
            hoverOffset: 4
        }
    ]
};

// Get the canvas element
const ctx = document.getElementById('circle').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
        plugins: {
            legend: {
                display: false, // Hide the default legend
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.label || '';
                        const value = context.parsed || 0;
                        return `${label}: ${value}`;
                    }
                }
            }
        }
    }
});
