var search = document.getElementById("busqueda");
var els = document.querySelectorAll(".el");

search.addEventListener("keyup", function () {
    let estadoActual = 0;
    let cadena = "";
    let pos = 0;
    let Aceptada = false;
    while (Aceptada == false) {
        cadena = search.value;
        x = cadena[pos++];
        console.log(x)
        console.log(estadoActual)
        switch (estadoActual) {
            case 0: if (x == "a") { estadoActual = 1 }
                if (x == "b") { estadoActual = 19 }
                if (x == "c") { estadoActual = 32 }
                if (x == "d") { estadoActual = 96 }
                if (x == "e") { estadoActual = 102 }
                if (x == "f") { estadoActual = 111 }
                if (x == "g") { estadoActual = 117 }
                if (x == "h") { estadoActual = 123 }
                if (x == "i") { estadoActual = 140 }
                if (x == "n") { estadoActual = 193 }
                if (x == "o") { estadoActual = 199 }
                if (x == "p") { estadoActual = 209 }
                if (x == "r") { estadoActual = 266 }
                if (x == "s") { estadoActual = 285 }
                if (x == "t") { estadoActual = 306 }
                if (x == "v") { estadoActual = 314 }
                else return false;
                break;
            case 1: if (x == "v") { estadoActual = 2 }
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
                Aceptada = true;
                break;
            default:
                break;
        }
    }

});