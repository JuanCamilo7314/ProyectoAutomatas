
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
                else if (x == "m") { estadoActual = 166 }
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
            case 5: if (x == "e") { estadoActual = 6 }
            else return false;
                break;
            case 6: if (x == "x") {
                Aceptada = true;
                estadoActual = 7;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/ProgresoAcademico.html'>Progreso Academico</a>";
            }
            else return false;
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
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/HistorialAcademico.html'>Historial Academico</a><a class='btnopciones' href='/resources/views/ProgresoAcademico.html'>Progreso Academico</a><a class='btnopciones' href='/resources/views/DatosAcademicos.html'>Datos Academicos</a>";
            } else if (x == "s") {
                estadoActual = 17
            } else return false;
                break;

            case 17: if (x == "x") {
                estadoActual = 18
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/DatosAcademicos.html'>Datos Academicos</a>";
            }
            else return false;
                break;

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

            case 25: if (x == "a") { estadoActual = 26 }
            else return false;
                break;

            case 26: if (x == "x") {
                estadoActual = 27
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/BusquedaDeMateria.html'>Busqueda de Materias</a>";
            }
            else return false;
                break;

            case 28: if (x == "a") { estadoActual = 29 }
            else return false;
                break;
            case 29: if (x == "r") { estadoActual = 30 }
            else return false;
                break;

            case 30: if (x == "x") {
                estadoActual = 31
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/BusquedaDeMateria.html'>Busqueda de Materias</a>";
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
            case 43: if (x == "s") { estadoActual = 44 }
            else return false;
                break;

            case 44: if (x == "x") {
                estadoActual = 45
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/CancelacionOrdinaria.html'>Cancelación de Materias Ordinaria</a><a class='btnopciones' href='./resources/views/CancelacionExtra.html'>Cancelación Extraordinaria de Materias</a>";
            }
            else return false;
                break;
            case 46: if (x == "x") {
                estadoActual = 47
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/CancelacionOrdinaria.html'>Cancelación de Materias Ordinaria</a><a class='btnopciones' href='./resources/views/CancelacionExtra.html'>Cancelación Extraordinaria de Materias</a>";
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
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/CalificacionMateriasA.html'>Calificación de las Materias por Mis Calificaciones</a><a class='btnopciones' href='/resources/views/CalificacionMateriasB.html'>Calificación de las Materias por Mi Plan Academico</a>";
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
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/RecuperarClave.html'>Recuperación de Contraseña</a><a class='btnopciones' href='./resources/views/RecuperarClave.html'>Cambio de Contraseña</a>";
            }
            else return false;
                break;

            case 64: if (x == "r") { estadoActual = 65 }
            else return false;
                break;
            case 65: if (x == "x") {
                estadoActual = 66
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/RecuperarClave.html'>Recuperación de Contraseña</a><a class='btnopciones' href='./resources/views/RecuperarClave.html'>Cambio de Contraseña</a>";
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
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/MateriaEnCurso.html'>Materias en Curso</a>";
            }
            else return false;
                break;

            case 75: if (x == "x") {
                estadoActual = 76
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones'href='/resources/views/MateriaEnCurso.html'>Materias en Curso</a>";
            }
            else return false;
                break;

            case 77: if (x == "a") { estadoActual = 78 }
            else return false;
                break;

            case 78: if (x == "v") { estadoActual = 79 }
            else return false;
                break;

            case 79: if (x == "e") { estadoActual = 80 }
            else return false;
                break;

            case 80: if (x == "x") {
                estadoActual = 81
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/RecuperarClave.html'>Recuperación de Contraseña</a><a class='btnopciones' href='/resources/views/RecuperarClave.html'>Cambio de Contraseña</a>";
            }
            else return false;
                break;

            case 82: if (x == "t") { estadoActual = 83 }
            else return false;
                break;

            case 83: if (x == "a") { estadoActual = 84 }
            else return false;
                break;

            case 84: if (x == "x") {
                estadoActual = 85
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/CitaInscripcion.html'>Cita de Inscripción</a>";
            }
            else return false;
                break;

            case 86: if (x == "n") { estadoActual = 87 }
            else return false;
                break;
            case 87: if (x == "t") { estadoActual = 88 }
            else return false;
                break;
            case 88: if (x == "r") { estadoActual = 89 }
            else return false;
                break;
            case 89: if (x == "a") { estadoActual = 90 }
            else return false;
                break;
            case 90: if (x == "s") { estadoActual = 91 }
            else return false;
                break;
            case 91: if (x == "e") { estadoActual = 92 }
            else return false;
                break;
            case 92: if (x == "ñ") { estadoActual = 93 }
            else return false;
                break;
            case 93: if (x == "a") { estadoActual = 94 }
            else return false;
                break;
            case 94: if (x == "x") {
                estadoActual = 95
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/RecuperarClave.html'>Recuperación de Contraseña</a><a class='btnopciones' href='/resources/views/RecuperarClave.html'>Cambio de Contraseña</a>";
            }
            else return false;
                break;
            case 96: if (x == "a") { estadoActual = 97 }
            else return false;
                break;
            case 97: if (x == "t") { estadoActual = 98 }
            else return false;
                break;
            case 98: if (x == "o") { estadoActual = 99 }
            else return false;
                break;
            case 99: if (x == "s") { estadoActual = 100 }
            else return false;
                break;
            case 100: if (x == "x") {
                estadoActual = 101
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/DatosAcademicos.html'>Datos Académicos</a><a class='btnopciones' href='/resources/views/DatosPersonales.html'>Datos Personales</a>";
            }
            else return false;
                break;


            case 102: if (x == "l") { estadoActual = 103 }
            else if (x == "x") { estadoActual = 324 }
            else return false;
                break;

            case 103: if (x == "i") { estadoActual = 104 }
            else return false;
                break;

            case 104: if (x == "m") { estadoActual = 105 }
            else return false;
                break;

            case 105: if (x == "i") { estadoActual = 106 }
            else return false;
                break;

            case 106: if (x == "n") { estadoActual = 107 }
            else return false;
                break;

            case 107: if (x == "a") { estadoActual = 108 }
            else return false;
                break;

            case 108: if (x == "r") { estadoActual = 109 }
            else return false;
                break;

            case 109: if (x == "x") {
                estadoActual = 110
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/CancelacionOrdinaria.html'>Cancelacion Ordinaria de Materias</a><a class='btnopciones' href='./resources/views/CancelacionExtra.html'>Cancelacion Extraordinaria de Materias</a>"
            }
            else return false;
                break;

            case 111: if (x == "i") { estadoActual = 112 }
            else return false;
                break;

            case 112: if (x == "n") { estadoActual = 113 }
            else return false;
                break;

            case 113: if (x == "a") { estadoActual = 114 }
            else return false;
                break;

            case 114: if (x == "l") { estadoActual = 115 }
            else return false;
                break;

            case 115: if (x == "x") {
                estadoActual = 116
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/CalificacionMateriasA.html'>Calificacion de Materias por Mis Calificaciones</a><a class='btnopciones' href='./resources/views/CalificacionMateriasB.html'>Calificacion de Materias por Mi Plan Académico</a>"
            }
            else return false;
                break;

            case 117: if (x == "r") { estadoActual = 118 }
            else return false;
                break;

            case 118: if (x == "a") { estadoActual = 119 }
            else return false;
                break;

            case 119: if (x == "d") { estadoActual = 120 }
            else return false;
                break;

            case 120: if (x == "o") { estadoActual = 121 }
            else return false;
                break;

            case 121: if (x == "x") {
                estadoActual = 122
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/SolicitudGrado.html'>Solicitud Grado</a>"
            }
            else return false;
                break;

            case 123: if (x == "o") { estadoActual = 124 }
            else if (x == "i") { estadoActual = 131 }
            else return false;
                break;

            case 124: if (x == "r") { estadoActual = 125 }
            else return false;
                break;

            case 125: if (x == "a") { estadoActual = 126 }
            else return false;
                break;

            case 126: if (x == "r") { estadoActual = 127 }
            else return false;
                break;

            case 127: if (x == "i") { estadoActual = 128 }
            else return false;
                break;

            case 128: if (x == "o") { estadoActual = 129 }
            else return false;
                break;

            case 129: if (x == "x") {
                estadoActual = 130
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/HorarioSemanal.html'>Horario Semanal</a>"
            }
            else return false;
                break;

            case 131: if (x == "s") { estadoActual = 132 }
            else return false;
                break;

            case 132: if (x == "t") { estadoActual = 133 }
            else return false;
                break;

            case 133: if (x == "o") { estadoActual = 134 }
            else return false;
                break;

            case 134: if (x == "r") { estadoActual = 135 }
            else return false;
                break;

            case 135: if (x == "i") { estadoActual = 136 }
            else return false;
                break;

            case 136: if (x == "a") { estadoActual = 137 }
            else return false;
                break;


            case 137: if (x == "l") { estadoActual = 138 }
            else return false;
                break;

            case 138: if (x == "x") {
                estadoActual = 139
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/HistorialAcademico.html'>Historial Académico</a>"
            }
            else return false;
                break;

            case 140: if (x == "n") { estadoActual = 141 }
            else return false;
                break;

            case 141: if (x == "s") { estadoActual = 142 }
            else if (x == "f") { estadoActual = 156 }
            else return false;
                break;

            case 142: if (x == "c") { estadoActual = 143 }
            else return false;
                break;

            case 143: if (x == "r") { estadoActual = 144 }
            else return false;
                break;

            case 144: if (x == "i") { estadoActual = 145 }
            else return false;
                break;

            case 145: if (x == "p") { estadoActual = 146 }
            else if (x == "b") { estadoActual = 152 }
            else return false;
                break;

            case 146: if (x == "c") { estadoActual = 147 }
            else return false;
                break;

            case 147: if (x == "i") { estadoActual = 148 }
            else return false;
                break;

            case 148: if (x == "o") { estadoActual = 149 }
            else return false;
                break;

            case 149: if (x == "n") { estadoActual = 150 }
            else return false;
                break;

            case 150: if (x == "x") {
                estadoActual = 151
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/InscripcionOrdinaria.html'>Inscripcion Ordinaria de Materias</a><a class='btnopciones' href='/resources/views/PagoReciboMatricula.html'>Pago de Recibo Para Inscripción y Cancelación Extraordinaria</a><a class='btnopciones' href='/resources/views/InscripcionExtra.html'>Inscripcion Extraordinaria de Materias</a><a class='btnopciones' href='/resources/views/CitaInscripcion.html'>Cita de Inscripción</a>"
            }
            else return false;
                break;

            case 152: if (x == "i") { estadoActual = 153 }
            else return false;
                break;

            case 153: if (x == "r") { estadoActual = 154 }
            else return false;
                break;

            case 154: if (x == "x") {
                estadoActual = 155
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/InscripcionOrdinaria.html'>Inscripcion Ordinaria de Materias</a><a class='btnopciones' href='/resources/views/InscripcionExtra.html'>Inscripcion Extraordinaria de Materias</a>"
            }
            else return false;
                break;

            case 156: if (x == "o") { estadoActual = 157 }
            else return false;
                break;

            case 157: if (x == "r") { estadoActual = 158 }
            else return false;
                break;

            case 158: if (x == "m") { estadoActual = 159 }
            else return false;
                break;

            case 159: if (x == "a") { estadoActual = 160 }
            else return false;
                break;

            case 160: if (x == "c") { estadoActual = 161 }
            else return false;
                break;

            case 161: if (x == "i") { estadoActual = 162 }
            else return false;
                break;

            case 162: if (x == "o") { estadoActual = 163 }
            else return false;
                break;

            case 163: if (x == "n") { estadoActual = 164 }
            else return false;
                break;

            case 164: if (x == "x") {
                estadoActual = 165
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/DatosPersonales.html'>Datos Personales</a><a class='btnopciones' href='/resources/views/DatosAcademicos.html'>Datos Académicos</a>"
            }
            else return false;
                break;

            case 166: if (x == "a") { estadoActual = 167 }
            else if (x == "i") { estadoActual = 188 }
            else return false;
                break;

            case 167: if (x == "t") { estadoActual = 168 }
            else if (x == "y") { estadoActual = 185 }
            else return false;
                break;

            case 168: if (x == "r") { estadoActual = 169 }
            else if (x == "e") { estadoActual = 178 }
            else return false;
                break;

            case 169: if (x == "i") { estadoActual = 170 }
            else return false;
                break;

            case 170: if (x == "c") { estadoActual = 171 }
            else return false;
                break;

            case 171: if (x == "u") { estadoActual = 172 }
            else return false;
                break;

            case 172: if (x == "l") { estadoActual = 173 }
            else return false;
                break;

            case 173: if (x == "a") { estadoActual = 174 }
            else return false;
                break;

            case 174: if (x == "r") { estadoActual = 175 }
            else if (x == "x") {
                estadoActual = 177
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/PagoReciboMatricula.html'>Recibo de Pago de Matrícula</a>"
            }
            else return false;
                break;

            case 175: if (x == "x") {
                estadoActual = 176
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/InscripcionOrdinaria.html'>Inscripción Ordinaria de Materias</a><a class='btnopciones' href='/resources/views/InscripcionExtra.html'>Inscripción Extraordinaria de Materias</a>"
            }
            else return false;
                break;

            case 178: if (x == "r") { estadoActual = 179 }
            else return false;
                break;

            case 179: if (x == "i") { estadoActual = 180 }
            else return false;
                break;

            case 180: if (x == "a") { estadoActual = 181 }
            else return false;
                break;

            case 181: if (x == "s") { estadoActual = 182 }
            else if (x == "x") {
                estadoActual = 184
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/InscripcionOrdinaria.html'>Inscripción Ordinaria de Materias</a><a class='btnopciones' href='/resources/views/InscripcionExtra.html'>Inscripción Extraordinaria de Materias</a><a class='btnopciones' href='/resources/views/CancelacionOrdinaria.html'>Cancelación Ordinaria de Materias</a><a class='btnopciones' href='/resources/views/CancelacionExtra.html'>Cancelación Extraordinaria de Materias</a><a class='btnopciones' href='/resources/views/BusquedaDeMateria.html'>Búsqueda de Materia</a><a class='btnopciones' href='/resources/views/MateriaEnCurso.html'>Materias en Curso</a><a class='btnopciones' href='/resources/views/MateriasVistasA.html'>Materias Vistas Por Plan Académico</a><a class='btnopciones' href='/resources/views/MateriasVistasB.html'>Materias Vistas Por Progreso Académico</a><a class='btnopciones' href='/resources/views/CalificacionMateriasA.html'>Calificación de Materias Por Mis Calificaciones</a><a class='btnopciones' href='/resources/views/CalificacionMateriasB.html'>Calificación de Materias Por Mi Plan Académico</a>"
            }
            else return false;
                break;

            case 182: if (x == "x") {
                estadoActual = 183
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/InscripcionOrdinaria.html'>Inscripción Ordinaria de Materias</a><a class='btnopciones' href='/resources/views/InscripcionExtra.html'>Inscripción Extraordinaria de Materias</a><a class='btnopciones' href='/resources/views/CancelacionOrdinaria.html'>Cancelación Ordinaria de Materias</a><a class='btnopciones' href='/resources/views/CancelacionExtra.html'>Cancelación Extraordinaria de Materias</a><a class='btnopciones' href='/resources/views/BusquedaDeMateria.html'>Búsqueda de Materia</a><a class='btnopciones' href='/resources/views/MateriaEnCurso.html'>Materias en Curso</a><a class='btnopciones' href='/resources/views/MateriasVistasA.html'>Materias Vistas Por Plan Académico</a><a class='btnopciones' href='/resources/views/MateriasVistasB.html'>Materias Vistas Por Progreso Académico</a><a class='btnopciones' href='/resources/views/CalificacionMateriasA.html'>Calificación de Materias Por Mis Calificaciones</a><a class='btnopciones' href='/resources/views/CalificacionMateriasB.html'>Calificación de Materias Por Mi Plan Académico</a>"
            }
            else return false;
                break;

            case 185: if (x == "a") { estadoActual = 186 }
            else return false;
                break;

            case 186: if (x == "a") {
                estadoActual = 187
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/PensumPregrado.html'>Pensum de Pregrado</a>"
            }
            else return false;
                break;

            case 188: if (x == "r") { estadoActual = 189 }
            else return false;
                break;

            case 189: if (x == "a") { estadoActual = 190 }
            else return false;
                break;

            case 190: if (x == "r") { estadoActual = 191 }
            else return false;
                break;

            case 191: if (x == "x") {
                estadoActual = 192
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/CitaInscripcion.html'>Cita de Inscripción</a>"
            }
            else return false;
                break;

            case 193: if (x == "o") { estadoActual = 194 }
            else return false;
                break;

            case 194: if (x == "t") { estadoActual = 195 }
            else return false;
                break;

            case 195: if (x == "a") { estadoActual = 196 }
            else return false;
                break;

            case 196: if (x == "s") { estadoActual = 197 }
            else return false;
                break;

            case 197: if (x == "x") {
                estadoActual = 198
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/CalificacionMateriasA.html'>Calificación de Materias Por Mis Calificaciones</a><a class='btnopciones' href='/resources/views/CalificacionMateriasB.html'>Calificación de Materias Por Mi Plan Académico</a>"
            }
            else return false;
                break;

            case 199: if (x == "r") { estadoActual = 200 }
            else return false;
                break;

            case 200: if (x == "d") { estadoActual = 201 }
            else return false;
                break;

            case 201: if (x == "i") { estadoActual = 202 }
            else return false;
                break;

            case 202: if (x == "n") { estadoActual = 203 }
            else return false;
                break;

            case 203: if (x == "a") { estadoActual = 204 }
            else return false;
                break;

            case 204: if (x == "r") { estadoActual = 205 }
            else return false;
                break;

            case 205: if (x == "i") { estadoActual = 206 }
            else return false;
                break;

            case 206: if (x == "a") { estadoActual = 207 }
            else return false;
                break;

            case 207: if (x == "x") {
                estadoActual = 208
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/InscripcionOrdinaria.html'>Inscripción Ordinaria de Materias</a><a class='btnopciones' href='/resources/views/CancelacionOrdinaria.html'>Cancelación Ordinaria de Materias</a>"
            }
            else return false;
                break;

            case 209: if (x == "a") { estadoActual = 210 }
            else if (x == "e") { estadoActual = 217 }
            else if (x == "r") { estadoActual = 232 }
            else if (x == "l") { estadoActual = 247 }
            else return false;
                break;

            case 210: if (x == "g") { estadoActual = 211 }
            else return false;
                break;

            case 211: if (x == "o") { estadoActual = 212 }
            else if (x == "a") { estadoActual = 214 }
            else return false;
                break;

            case 212: if (x == "x") {
                estadoActual = 213
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/PagoReciboMatricula.html'>Recibo de Pago de Matricula</a> <a class='btnopciones' href='/resources/views/PagoReciboExtra.html'>Pago de Recibos</a>"
            }

            case 214: if (x == "r") { estadoActual = 215 }
            else return false;
                break;

            case 215: if (x == "x") {
                estadoActual = 216
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/PagoReciboMatricula.html'>Recibo de Pago de Matricula</a> <a class='btnopciones' href='/resources/views/PagoReciboExtra.html'>Pago de Recibos</a>"
            }

            case 217: if (x == "n") { estadoActual = 218 }
            else if (x == "r") { estadoActual = 223 }
            else return false;
                break;

            case 218: if (x == "s") { estadoActual = 219 }
            else return false;
                break;

            case 219: if (x == "u") { estadoActual = 220 }
            else return false;
                break;

            case 220: if (x == "m") { estadoActual = 221 }
            else return false;
                break;

            case 221: if (x == "x") {
                estadoActual = 222
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/PensumPregrado.html'>Pensum de Pregrado</a>"
            }

            case 223: if (x == "s") { estadoActual = 224 }
            else return false;
                break;

            case 224: if (x == "o") { estadoActual = 225 }
            else return false;
                break;

            case 225: if (x == "n") { estadoActual = 226 }
            else return false;
                break;

            case 226: if (x == "a") { estadoActual = 227 }
            else return false;
                break;

            case 227: if (x == "l") { estadoActual = 228 }
            else return false;
                break;

            case 228: if (x == "e") { estadoActual = 229 }
            else return false;
                break;

            case 229: if (x == "s") { estadoActual = 230 }
            else return false;
                break;

            case 230: if (x == "x") {
                estadoActual = 231
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/DatosPersonales.html'>Datos Personales</a>"
            }

            case 232: if (x == "e") { estadoActual = 233 }
            else if (x == "o") { estadoActual = 240 }
            else return false;
                break;

            case 233: if (x == "g") { estadoActual = 234 }
            else return false;
                break;

            case 234: if (x == "r") { estadoActual = 235 }
            else return false;
                break;

            case 235: if (x == "a") { estadoActual = 236 }
            else return false;
                break;

            case 236: if (x == "d") { estadoActual = 237 }
            else return false;
                break;

            case 237: if (x == "o") { estadoActual = 238 }
            else return false;
                break;

            case 238: if (x == "x") {
                estadoActual = 239
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/PensumPregrado.html'>Pensum de Pregrado</a>"
            }

            case 240: if (x == "g") { estadoActual = 241 }
            else return false;
                break;

            case 241: if (x == "r") { estadoActual = 242 }
            else return false;
                break;

            case 242: if (x == "e") { estadoActual = 243 }
            else return false;
                break;

            case 243: if (x == "s") { estadoActual = 244 }
            else return false;
                break;

            case 244: if (x == "o") { estadoActual = 245 }
            else return false;
                break;

            case 245: if (x == "x") {
                estadoActual = 246
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/HistorialAcademico.html'>Historial Académico</a> <a class='btnopciones' href='/resources/views/ProgresoAcademico.html'>Progreso Académico</a>"
            }

            case 247: if (x == "a") { estadoActual = 248 }
            else return false;
                break;

            case 248: if (x == "n") { estadoActual = 249 }
            else return false;
                break;

            case 249: if (x == "i") { estadoActual = 250 }
            else return false;
                break;

            case 250: if (x == "f") { estadoActual = 251 }
            else return false;
                break;

            case 251: if (x == "i") { estadoActual = 252 }
            else return false;
                break;

            case 252: if (x == "c") { estadoActual = 253 }
            else return false;
                break;

            case 253: if (x == "a") { estadoActual = 254 }
            else return false;
                break;

            case 254: if (x == "r") { estadoActual = 255 }
            else if (x == "c") { estadoActual = 257 }
            else if (x == "d") { estadoActual = 262 }
            else return false;
                break;

            case 255: if (x == "x") {
                estadoActual = 256
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/PlanificadorClases.html'>Planificador de Clases</a>"
            }

            case 257: if (x == "i") { estadoActual = 258 }
            else return false;
                break;

            case 258: if (x == "o") { estadoActual = 259 }
            else return false;
                break;


            case 259: if (x == "n") { estadoActual = 260 }
            else return false;
                break;

            case 260: if (x == "x") {
                estadoActual = 261
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/PlanificadorClases.html'>Planificador de Clases</a>"
            }

            case 262: if (x == "o") { estadoActual = 263 }
            else return false;
                break;

            case 263: if (x == "r") { estadoActual = 264 }
            else return false;
                break;

            case 264: if (x == "x") {
                estadoActual = 265
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/PlanificadorClases.html'>Planificador de Clases</a>"
            }

            case 266: if (x == "e") { estadoActual = 267 }
            else return false;
                break;

            case 267: if (x == "c") { estadoActual = 268 }
            else return false;
                break;

            case 268: if (x == "i") { estadoActual = 269 }
            else if (x == "u") { estadoActual = 273 }
            else return false;
                break;

            case 269: if (x == "b") { estadoActual = 270 }
            else return false;
                break;

            case 270: if (x == "o") { estadoActual = 271 }
            else return false;
                break;

            case 271: if (x == "x") {
                estadoActual = 272
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/PagoReciboMatricula.html'>Pago De Recibos</a>  <a class='btnopciones' href='/resources/views/PagoReciboExtra.html'>Recibo de Pago de Matrícula</a>"
            }

            case 273: if (x == "p") { estadoActual = 274 }
            else return false;
                break;

            case 274: if (x == "e") { estadoActual = 275 }
            else return false;
                break;

            case 275: if (x == "r") { estadoActual = 276 }
            else return false;
                break;

            case 276: if (x == "a") { estadoActual = 277 }
            else return false;
                break;

            case 277: if (x == "r") { estadoActual = 278 }
            else if (x == "c") { estadoActual = 280 }
            else return false;
                break;

            case 278: if (x == "x") {
                estadoActual = 279
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/RecuperarClave.html'> Recuperación de Contraseña/Cambio de Contraseña </a>"
            }

            case 280: if (x == "i") { estadoActual = 281 }
            else return false;
                break;

            case 281: if (x == "o") { estadoActual = 282 }
            else return false;
                break;

            case 282: if (x == "n") { estadoActual = 283 }
            else return false;
                break;

            case 283: if (x == "x") {
                estadoActual = 284
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/RecuperarClave.html'> Recuperación de Contraseña/Cambio de Contraseña </a>"
            }

            case 285: if (x == "e") { estadoActual = 286 }
            else if (x == "o") { estadoActual = 294 }
            else return false;
                break;


            case 286: if (x == "m") { estadoActual = 287 }
            else return false;
                break;

            case 287: if (x == "a") { estadoActual = 288 }
            else return false;
                break;

            case 288: if (x == "n") { estadoActual = 289 }
            else return false;
                break;

            case 289: if (x == "a") { estadoActual = 290 }
            else return false;
                break;

            case 290: if (x == "x") {
                estadoActual = 291
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/HorarioSemanal.html'> Horario Semanal </a>"
            }
            else if (x == "l") { estadoActual = 292 }
            else return false;
                break;

            case 292: if (x == "x") {
                estadoActual = 293
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/HorarioSemanal.html'> Horario Semanal </a>"
            }

            case 294: if (x == "l") { estadoActual = 295 }
            else return false;
                break;

            case 295: if (x == "i") { estadoActual = 296 }
            else return false;
                break;

            case 296: if (x == "c") { estadoActual = 297 }
            else return false;
                break;

            case 297: if (x == "i") { estadoActual = 298 }
            else return false;
                break;

            case 298: if (x == "t") { estadoActual = 299 }
            else return false;
                break;

            case 299: if (x == "u") { estadoActual = 300 }
            else return false;
                break;

            case 300: if (x == "d") { estadoActual = 301 }
            else return false;
                break;

            case 301: if (x == "x") {
                estadoActual = 302
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/SolicitudGrado.html'> Solicutud de Grado </a>"
            }
            else if (x == "e") { estadoActual = 303 }
            else return false;
                break;

            case 303: if (x == "s") { estadoActual = 304 }
            else return false;
                break;

            case 304: if (x == "x") {
                estadoActual = 305
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/SolicitudGrado.html'> Solicutud de Grado </a>"
            }
            else return false;
                break;

            case 306: if (x == "r") { estadoActual = 307 }
            else return false;
                break;

            case 307: if (x == "a") { estadoActual = 308 }
            else return false;
                break;

            case 308: if (x == "m") { estadoActual = 309 }
            else return false;
                break;

            case 309: if (x == "i") { estadoActual = 310 }
            else return false;
                break;

            case 310: if (x == "t") { estadoActual = 311 }
            else return false;
                break;

            case 311: if (x == "e") { estadoActual = 312 }
            else return false;
                break;

            case 312: if (x == "x") {
                estadoActual = 313
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/SolicitudGrado.html'> Solicutud de Grado </a>"
            }
            else return false;
                break;

            case 314: if (x == "e") { estadoActual = 315 }
            else if (x == "i") { estadoActual = 318 }
            else return false;
                break;

            case 315: if (x == "r") { estadoActual = 316 }
            else return false;
                break;

            case 316: if (x == "x") {
                estadoActual = 317
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/CitaInscripcion.html'> Cita de Inscripción </a>"
            }
            else return false;
                break;

            case 318: if (x == "s") { estadoActual = 319 }
            else return false;
                break;

            case 319: if (x == "t") { estadoActual = 320 }
            else return false;
                break;

            case 320: if (x == "a") { estadoActual = 321 }
            else return false;
                break;

            case 321: if (x == "s") { estadoActual = 322 }
            else return false;
                break;

            case 322: if (x == "x") {
                estadoActual = 323
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/MateriasVistasA.html'> Materias Vistas Por Plan Académico </a> <a class='btnopciones' href='/resources/views/MateriasVistasB.html'> Materias Vistas Por Progreso Académico</a>"
            }
            else return false;
                break;






            case 324: if (x == "t") { estadoActual = 325 }
            else return false;
                break;

            case 325: if (x == "r") { estadoActual = 326 }
            else return false;
                break;

            case 326: if (x == "a") { estadoActual = 327 }
            else return false;
                break;

            case 327: if (x == "o") { estadoActual = 328 }
            else return false;
                break;

            case 328: if (x == "r") { estadoActual = 329 }
            else return false;
                break;

            case 329: if (x == "d") { estadoActual = 330 }
            else return false;
                break;

            case 330: if (x == "i") { estadoActual = 331 }
            else return false;
                break;

            case 331: if (x == "n") { estadoActual = 332 }
            else return false;
                break;

            case 332: if (x == "a") { estadoActual = 333 }
            else return false;
                break;

            case 333: if (x == "r") { estadoActual = 334 }
            else return false;
                break;

            case 334: if (x == "i") { estadoActual = 335 }
            else return false;
                break;

            case 335: if (x == "a") { estadoActual = 336 }
            else return false;
                break;

            case 336: if (x == "x") {
                estadoActual = 337
                Aceptada = true;
                document.getElementById("cargas").innerHTML =
                    "<a class='btnopciones' href='/resources/views/InscripcionExtra.html'>Inscripción Extraordinaria de Materias</a><a href='/resources/views/CancelacionExtra.html'>Cancelación Extraordinaria de Materias</a><a href='/resources/views/PagoReciboMatricula.html'>Pago de Recibo Para Inscripción y Cancelación de Materias Extraordinaria</a>"
            }

            else return false;
                break;
            default:
                break;
        }
    }
}