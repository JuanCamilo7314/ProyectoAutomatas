var search = document.getElementById("busqueda-input");
var boxopciones = document.getElementById("opciones");

search.addEventListener("keyup", function () {
    input = document.getElementById("busqueda-input").value;
    if (input=="") {
        boxopciones.style.display="none";
        boxopciones.innerHTML="<ul id='opciones'><li id='cargas'></li></ul>";
    }
    
    if (input!="") {
        boxopciones.style.display="block";
        
    }
});