const equipos = [];
//comparar los cambios entre la anterior entrega para ver que funcione correctamente y mas ordenado
// usamos const para el nombre y los jugadores que se agreguen
// No usamos el constructor con creaciones propias porque las crea el usuario (revisar)

let equiposCreados = false;// CUIDADO ACA, lo usamos para  ver si ya se muestran los equipos (controlar que ande bien)

function armarEquipo() {
    let continuar = true;

    while (continuar) {
        const equipo = {
            nombre: '',
            jugadores: []
        };

        equipo.nombre = prompt("Ingrese el nombre del equipo:");
        if (!equipo.nombre) {
            alert("Por favor, ingrese un nombre para el equipo.");
            continue;
        }

        for (let i = 0; i < 5; i++) {
            let nombreJugador;
            let posicion;

            while (!nombreJugador) {
                nombreJugador = prompt(`Ingrese el nombre del jugador ${i + 1}:`);
                if (!nombreJugador) {
                    alert("Por favor, ingrese un nombre para el jugador.");
                }
            }

            do {
                posicion = prompt(`Ingrese la posición del jugador ${i + 1} (Arquero, Defensor, Mediocampista, Delantero):`);
                if (!posicion) {
                    alert("Por favor, ingrese una posición.");
                    continue;
                }

                const posicionesValidas = ["arquero", "defensor", "mediocampista", "delantero"];
                if (posicionesValidas.includes(posicion.toLowerCase())) {
                    break;
                } else {
                    alert("Por favor, ingrese una posición válida.");
                }
            } while (true);

            equipo.jugadores.push({ nombre: nombreJugador, posicion });
        }

        equipos.push(equipo);

        let respuesta;
        do {
            respuesta = prompt("¿Desea armar otro equipo? (Si/No)").toLowerCase();
            if (respuesta !== "si" && respuesta !== "no") {
                alert("Por favor, indique 'Si' o 'No'.");
            }
        } while (respuesta !== "si" && respuesta !== "no");

        if (respuesta === "no") {
            continuar = false;
        }
    }

    mostrarEquipos();
    calcularTotal();
}
// Funcion (usamos forEach para mostrar equipos y jugadores)
function mostrarEquipos() {
    if (!equiposCreados) {
        equipos.forEach((equipo, numeroEquipo) => {
            console.log(`Equipo ${numeroEquipo + 1}: ${equipo.nombre}`);
            console.log("Jugadores:");
            equipo.jugadores.forEach((jugador, numeroJugador) => {
                console.log(`  ${numeroJugador + 1}. ${jugador.nombre} - ${jugador.posicion}`);
            });
            console.log("------------------------");
        });
        equiposCreados = true;
    }
}

//Calculamos el precio de los equipos,cada uno 18k, y despues le damos a elegir en cuantas cuotas. {{{Usamos length}}} (revisar)
function calcularTotal() {
    const precioPorEquipo = 18000;
    const total = equipos.length * precioPorEquipo;
    console.log(`El total a pagar es: $${total}`);

    let cuotas = prompt("¿En cuantas cuotas desea pagar? (1, 3 o 6)");
    while (cuotas !== "1" && cuotas !== "3" && cuotas !== "6") {
        cuotas = prompt("Opcion no valida. Por favor, elija entre 1, 3 o 6 cuotas.");
    }

    if (cuotas === "1") {
        console.log(`Tenes que pagar el total de $${total} en 1 cuota.`);
        alert(`El total a pagar por los equipos es: $${total}. Tenes que pagar el total sin cuotas.`);
    } else {
        const totalPorCuota = total / parseInt(cuotas);
        console.log(`Tenes que pagar $${totalPorCuota} por mes durante ${cuotas} meses.`);
        alert(`El total a pagar por los equipos es: $${total}. Tenes que pagar $${totalPorCuota} por mes durante ${cuotas} meses.`);
    }
}

armarEquipo();
