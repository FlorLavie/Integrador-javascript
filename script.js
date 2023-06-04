/*Deberá contener la funcionalidad en Javascript, al momento de presionar el botón “Resumen”,
 deberá mostrar en la sección “Total a Pagar: $”, el monto correspondiente a la cantidad de 
 tickets a comprar con el descuento correspondiente dependiendo la categoría seleccionada, 
 existen 3 categorías, Estudiante, Trainee, Junior.*/



const eventoResumen = document.getElementById("Resumen").addEventListener("click", resumen);


function resumen() {

    const cant = document.getElementById("Cantidad").value;
    const cate = document.getElementById("Categoria").value;

    let valorTotal;
    let seleccionada;
    let descuento;

    valorTotal = parseInt(cant * 200);
    seleccionada = cate;

    if (valorTotal > 0) {

        const cambiarValorDescuento = document.getElementById("Categoria").addEventListener("change", resumen);
        const cambiarValorTotal = document.getElementById("Cantidad").addEventListener("change", resumen);


        switch (seleccionada) {
            case "Estudiante":
                descuento = Math.floor(valorTotal * 20) / 100;
                break;
            case "Trainee":
                descuento = Math.floor(valorTotal * 50) / 100;
                break;
            case "Junior":
                descuento = Math.floor(valorTotal * 85) / 100;
        }
        let mostrar = document.getElementById("resultado");
        mostrar.value = `Total a Pagar: $ ${descuento}`;
    }
}