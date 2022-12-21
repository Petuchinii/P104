var y = Math.floor(Math.random() * 10 + 1);
player_name = localStorage.getItem("player_name");
var ama_m = 5;

function ilp() { 
    var lips = document.getElementById("numerou").value;
    if(lips == y) {
        alert("¡Felicidades!" + player_name + "lo adivinaste, te tomo" + ama_m);
    }
    else if(lips > y) {
        alert("Intenta con un número más pequeño");
        ama_m ++;
    }
    else {
        alert("Intenta con un número más grande");
        ama_m ++;
    }
}