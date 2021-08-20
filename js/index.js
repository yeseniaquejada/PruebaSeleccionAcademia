let numeroPredio = 20;
let totalPredio = 0;
let mesActual = new Date().getMonth() + 1;

document.getElementById("totalPredios").innerText=totalPredio;

document.getElementById("boton").addEventListener("click", (g) => {
    g.preventDefault();

    if (numeroPredio >= 1) {
        let administracion = 0;
        let gimnasio = 0;
        let aseo = 0;
        let predioActual = 0;

        numeroPredio -= 1;
        document.getElementById("tituloFormulario").innerText = `Ingresa los datos del predio # ${numeroPredio}`;

        let numeroInmueble = document.getElementById("numeroInmueble").value;
        let metrosCuadrados = document.getElementById("metrosCuadrados").value;
        let tipoInmueble = document.getElementById("tipoInmueble").value;
        let cantidadHabitantes = document.getElementById("cantidadHabitantes").value;

        administracion = metrosCuadrados * 1500;

        if (tipoInmueble == "casa") {
            administracion += 100000;
        } else {
            administracion += 50000;
        }

        aseo = (administracion * 0.1) + (metrosCuadrados * 1000);

        for (let i = 0; i < cantidadHabitantes; i++) {
            const edad = prompt(`Ingresa la edad del habitante # ${i + 1}`);
            const genero = prompt(`Ingresa el género del habitante # ${i + 1}`);


            if (genero.toLowerCase == "masculino") {
                if (edad >= 10 && edad < 20) {
                    gimnasio += 20000;
                } else if (edad >= 20 && edad < 40) {
                    gimnasio += 15000;
                } else if (edad >= 40 && edad <= 60) {
                    gimnasio += 10000;
                }
            } else {
                if (edad >= 10 && edad < 18) {
                    gimnasio += 15000;
                } else if (edad >= 18 && edad < 35) {
                    gimnasio += 12000;
                } else if (edad >= 35 && edad <= 55) {
                    gimnasio += 8000;
                }
            }
        }


        totalPredio += administracion + gimnasio + aseo;
        predioActual = administracion + gimnasio + aseo;

       
        document.getElementById("dos").style.opacity = 1;
        document.getElementById("dos").style.zIndex = 2;
        document.getElementById("resultado-numeroInmueble").innerText = `Señores inmueble #${numeroInmueble}`;
        document.getElementById("resultado-mes").innerText = `Cuota del mes ${mesActual}`;
        document.getElementById("resultado-administracion").innerText = `$${administracion}`;
        document.getElementById("resultado-aseo").innerText = `$${aseo}`;
        document.getElementById("resultado-gimnasio").innerText = `$${gimnasio}`;
        document.getElementById("resultado-total").innerText = `$ ${predioActual}`;
        document.getElementById("totalPredios").innerText=totalPredio;
        document.getElementById("numeroInmueble").value = "";
        document.getElementById("metrosCuadrados").value = "";
        document.getElementById("cantidadHabitantes").value = "";
    } 
})

document.getElementById("close").addEventListener("click", () => {
    document.getElementById("dos").style.opacity = 0;
    document.getElementById("dos").style.zIndex = -1;
})
