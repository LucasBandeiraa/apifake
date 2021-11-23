
var listaArray = [];


function clicar(){
    var listaUsuario = document.getElementById("lista").value;
    listaArray.push(listaUsuario);
    mostrarItens();

}

function mostrarItens(){
    var itensLista = "<ul id='listaItens'>"
    for(x = 0; x < listaArray.length; x++){
        itensLista += `<li>  ${listaArray[x]}  </li>`;
    }
        itensLista += "</ul>"
    document.getElementById("itens").innerHTML=itensLista;
}

function removeItem(){
    var remover = document.getElementById('listaItens');
    remover.removeChild(remover.childNodes[0]);
}



