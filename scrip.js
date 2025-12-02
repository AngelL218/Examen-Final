    var div = document.getElementById("perfil");
    var isMasculino = true;
    
    function cambiar() {
        var nombreElement = document.getElementById("nombre");
        var profesionElement = document.getElementById("profesion");
        
        if (isMasculino) {
            nombreElement.textContent = "Tatsura Yamashito";
            profesionElement.textContent = "Es una cantautora, música, productora discográfica y arreglista japonesa, pionera del género musical conocido como city pop.";
            alert("Se ha cambiado a femenino");

            isMasculino  = false;
        }

        else if (isMasculino) {
            nombreElement.textContent = "Tatsurō Yamashita";
            profesionElement.textContent = "Es un cantautor, músico, productor discográfico y arreglista japonés, pionero del género musical conocido como city pop.";
            alert("Se ha cambiado a masculino");
        }

        isMasculino = !isMasculino;
        
}


