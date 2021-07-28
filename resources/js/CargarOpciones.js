function cargarOpciones() {
    var input = "";
    input = document.getElementById("busqueda-input").value;
    console.log(input)
    let estadoActual = 0;
    let cadena = "";
    let pos = 0;
    let Aceptada = false;
    while (Aceptada == false) {
        cadena = (`${input}x`);
        x = cadena[pos++];
        console.log(estadoActual)
        console.log(x)
        switch (estadoActual) {
            case 0:
                if (x == "a") { estadoActual = 1 }
                else if (x == "b") { estadoActual = 19 }
                else if (x == "c") { estadoActual = 32 }
                else if (x == "d") { estadoActual = 96 }
                else if (x == "e") { estadoActual = 102 }
                else if (x == "f") { estadoActual = 111 }
                else if (x == "g") { estadoActual = 117 }
                else if (x == "h") { estadoActual = 123 }
                else if (x == "i") { estadoActual = 140 }
                else if (x == "n") { estadoActual = 193 }
                else if (x == "o") { estadoActual = 199 }
                else if (x == "p") { estadoActual = 209 }
                else if (x == "r") { estadoActual = 266 }
                else if (x == "s") { estadoActual = 285 }
                else if (x == "t") { estadoActual = 306 }
                else if (x == "v") { estadoActual = 314 }
                else return false;
                break;
            case 1: if (x == "v") { estadoActual = 2 }
            else if (x == "c") { estadoActual = 8 }
            else return false;
                break;
            case 2: if (x == "a") { estadoActual = 3 }
            else return false;
                break;
            case 3: if (x == "n") { estadoActual = 4 }
            else return false;
                break;
            case 4: if (x == "c") { estadoActual = 5 }
            else return false;
                break;
            case 5: if (x == "e") {
                estadoActual = 6
                Aceptada = true;
                estadoActual = 7;
                x = "x"
                console.log(estadoActual)
                console.log(x)
                document.getElementById("cargas").innerHTML =
                    "<a href='./resources/views/ProgresoAcademico.html'>Progreso Academico</a>";
            }
                break;
            case 8: if (x == "a") { estadoActual = 9 }
            else return false;
                break;
            case 9: if (x == "d") { estadoActual = 10 }
            else return false;
                break;
            case 10: if (x == "e") { estadoActual = 11 }
            else return false;
                break;
            case 11: if (x == "m") { estadoActual = 12 }
            else return false;
                break;
            case 12: if (x == "i") { estadoActual = 13 }
            else return false;
                break;
            case 13: if (x == "c") { estadoActual = 14 }
            else return false;
                break;
            case 14: if (x == "o") { estadoActual = 15 }
            else return false;
                break;
            case 15: if (x == "x") {
                Aceptada = true;
                estadoActual = 16;
                console.log(estadoActual)
                document.getElementById("cargas").innerHTML =
                    "<a href='./resources/views/HistorialAcademico.html'>Historial Academico</a><br><a href='./resources/views/ProgresoAcademico.html'>Progreso Academico</a><br><a href='./resources/views/DatosAcademicos.html'>Datos Academicos</a>";
            } else if (x == "s") {
                estadoActual = 17
            } else return false;

                break;
            case 17: if (x == "s") {
                estadoActual = 18
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a href='./resources/views/DatosAcademicos.html'>Datos Academicos</a>";
                break;
            }
            case 19: if (x == "u") { estadoActual = 20 }
            else return false;
                break;

            case 20: if (x == "s") { estadoActual = 21 }
            else return false;
                break;

            case 21: if (x == "q") { estadoActual = 22 }
            else if (x == "c") {
                estadoActual = 28;
            }
            else return false;
                break;

            case 22: if (x == "u") { estadoActual = 23 }
            else return false;
                break;

            case 23: if (x == "e") { estadoActual = 24 }
            else return false;
                break;

            case 24: if (x == "d") { estadoActual = 25 }
            else return false;
                break;

            case 25: if (x == "a") {
                estadoActual = 26
                Aceptada = true;
                x = "x"
                console.log(estadoActual)
                console.log(x)
                document.getElementById("cargas").innerHTML =
                    "<a href='./resources/views/BusquedaDeMateria.html'>Busqueda de Materias</a>";
            }
            else return false;
                break;

            case 28: if (x == "a") { estadoActual = 29 }
            else return false;
                break;
            case 29: if (x == "r") {
                estadoActual = 30
                Aceptada = true;
                x = "x"
                console.log(estadoActual)
                console.log(x)
                document.getElementById("cargas").innerHTML =
                    "<a href='./resources/views/BusquedaDeMateria.html'>Busqueda de Materias</a>";
            }
            else return false;
                break;
            case 32: if (x == "a") { estadoActual = 33 }
            else if (x == "u") { estadoActual = 67 }
            else if (x == "l") { estadoActual = 77 }
            else if (x == "i") { estadoActual = 82 }
            else if (x == "o") { estadoActual = 86 }
            else return false;
                break;
            case 33: if (x == "n") { estadoActual = 34 }
            else if (x == "l") { estadoActual = 48 }
            else if (x == "m") { estadoActual = 59 }
            else return false;
                break;
            case 34: if (x == "c") { estadoActual = 35 }
            else return false;
                break;
            case 35: if (x == "e") { estadoActual = 36 }
            else return false;
                break;
            case 36: if (x == "l") { estadoActual = 37 }
            else return false;
                break;
            case 37: if (x == "a") { estadoActual = 38 }
            else return false;
                break;
            case 38: if (x == "c") { estadoActual = 39 }
            else if (x == "r") { estadoActual = 46 }
            else return false;
                break;
            case 39: if (x == "i") { estadoActual = 40 }
            else return false;
                break;
            case 40: if (x == "o") { estadoActual = 41 }
            else return false;
                break;
            case 41: if (x == "n") { estadoActual = 42 }
            else return false;
                break;
            case 42: if (x == "e") { estadoActual = 43 }
            else return false;
                break;
            case 43: if (x == "s") {
                estadoActual = 44
                Aceptada = true;
                x = "x"
                console.log(estadoActual)
                console.log(x)
                document.getElementById("cargas").innerHTML =
                    "<a href='./resources/views/CancelacionOrdinaria.html'>Cancelación de Materias Ordinaria</a><br><a href='./resources/views/CancelacionExtra.html'>Cancelación Extraordinaria de Materias</a>";
            }
            else return false;
                break;
            case 46: if (x == "x") {
                estadoActual = 47
                Aceptada = true;
                x = "x"
                console.log(estadoActual)
                console.log(x)
                document.getElementById("cargas").innerHTML =
                    "<a href='./resources/views/CancelacionOrdinaria.html'>Cancelación de Materias Ordinaria</a><br><a href='./resources/views/CancelacionExtra.html'>Cancelación Extraordinaria de Materias</a>";
            }
            else return false;
                break;

            case 48: if (x == "i") { estadoActual = 49 }
            else return false;
                break;
            case 49: if (x == "f") { estadoActual = 50 }
            else return false;
                break;
            case 50: if (x == "i") { estadoActual = 51 }
            else return false;
                break;
            case 51: if (x == "c") { estadoActual = 52 }
            else return false;
                break;
            case 52: if (x == "a") { estadoActual = 53 }
            else return false;
                break;
            case 53: if (x == "c") { estadoActual = 54 }
            else return false;
                break;
            case 54: if (x == "i") { estadoActual = 55 }
            else return false;
                break;
            case 55: if (x == "o") { estadoActual = 56 }
            else return false;
                break;
            case 56: if (x == "n") { estadoActual = 57 }
            else return false;
                break;
            case 57: if (x == "x") {
                estadoActual = 58
                Aceptada = true;
                console.log(estadoActual)
                console.log(x)
                document.getElementById("cargas").innerHTML =
                    "<a href='./resources/views/CalificacionMateriasA.html'>Calificación de las Materias por Mis Calificaciones</a><br><a href='./resources/views/CalificacionMateriasB.html'>Calificación de las Materias por Mi Plan Academico</a>";
            }
            else return false;
                break;

            case 59: if (x == "b") { estadoActual = 60 }
            else return false;
                break;
            case 60: if (x == "i") { estadoActual = 61 }
            else return false;
                break;
            case 61: if (x == "o") { estadoActual = 62 }
            else if (x = "a") { estadoActual = 64 }
            else return false;
                break;

            case 62: if (x == "x") {
                estadoActual = 63
                Aceptada = true;
                console.log(estadoActual)
                console.log(x)
                document.getElementById("cargas").innerHTML =
                    "<a href='./resources/views/RecuperarClave.html'>Recuperación de Contraseña</a><br><a href='./resources/views/RecuperarClave.html'>Cambio de Contraseña</a>";
            }
            else return false;
                break;

            case 64: if (x == "r") { estadoActual = 65 }
            else return false;
                break;
            case 65: if (x == "x") {
                estadoActual = 66
                Aceptada = true;
                console.log(estadoActual)
                console.log(x)
                document.getElementById("cargas").innerHTML =
                    "<a href='./resources/views/RecuperarClave.html'>Recuperación de Contraseña</a><br><a href='./resources/views/RecuperarClave.html'>Cambio de Contraseña</a>";
            }
            else return false;
                break;

            case 67: if (x == "r") { estadoActual = 68 }
            else return false;
                break;
            case 68: if (x == "s") { estadoActual = 69 }
            else return false;
                break;
            case 69: if (x == "a") { estadoActual = 70 }
            else if (x == "o") { estadoActual = 75 }
            else return false;
                break;
            case 70: if (x == "d") { estadoActual = 71 }
            else return false;
                break;
            case 71: if (x == "a") { estadoActual = 72 }
            else return false;
                break;
            case 72: if (x == "s") { estadoActual = 73 }
            else return false;
                break;
            case 73: if (x == "x") {
                estadoActual = 74
                Aceptada = true;
                console.log(estadoActual)
                console.log(x)
                document.getElementById("cargas").innerHTML =
                    "<a href='./resources/views/MateriaEnCurso.html'>Materias en Curso</a>";
            }
            else return false;
                break;

            case 75: if (x == "x") {
                estadoActual = 76
                Aceptada = true;
                console.log(estadoActual)
                console.log(x)
                document.getElementById("cargas").innerHTML =
                    "<a href='./resources/views/MateriaEnCurso.html'>Materias en Curso</a>";
            }
            else return false;
                break;
            default:
                break;
        }
    }
}