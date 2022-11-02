window.onload = () => { moverImagenes() }

function moverImagenes() {
    let clicked;
    let imagenes = document.getElementsByTagName("img");
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].style.position = "absolute";
        imagenes[i].addEventListener("mousedown", (e) => {
            clicked = true
            e.target.addEventListener("mouseup", () => {
                clicked = false;
            });
            pict = e.target;
            e.target.style.top = e.clientY - e.target.offsetHeight / 2 + "px";
            e.target.style.left = e.clientX - e.target.offsetWidth / 2 + "px";
        });
        document.addEventListener("mousemove", (f) => {
            if (clicked) {
                pict.style.left = f.clientX - pict.offsetWidth / 2 + "px";
                pict.style.top = f.clientY - pict.offsetHeight / 2 + "px";
            }
        });

    }
}

