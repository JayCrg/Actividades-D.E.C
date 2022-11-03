function changeAlineation(){
    let parrafos = document.getElementsByTagName("p");
    for (let i = 0; i < parrafos.length; i++) {
        if(parrafos[i].style.textAlign == "left"){
        parrafos[i].style.textAlign = "right";
    }
    else{
        parrafos[i].style.textAlign = "left";
    }
}
}
function augmentFontSize(){
    let parrafos = document.getElementsByTagName("p");
    for (let i = 0; i < parrafos.length; i++) {
        let style = window.getComputedStyle(parrafos[i], null).getPropertyValue('font-size');
        let fontSize = parseFloat(style); 
        parrafos[i].style.fontSize = (fontSize + 1) + 'px';
    }
}

function decreaseFontSize(){
    let parrafos = document.getElementsByTagName("p");
    for (let i = 0; i < parrafos.length; i++) {
        let style = window.getComputedStyle(parrafos[i], null).getPropertyValue('font-size');
        let fontSize = parseFloat(style);
        parrafos[i].style.fontSize = (fontSize - 1) + 'px';
    }
}

window.onload = () => {
    document.getElementById("alineacion").addEventListener('click',changeAlineation);
    document.getElementById("aumentar").addEventListener('click',augmentFontSize);
    document.getElementById("disminuir").addEventListener('click',decreaseFontSize);
}