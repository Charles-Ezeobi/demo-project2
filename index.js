let close = document.getElementById("close");
close.addEventListener("click", closeMe);

function closeMe(){
    document.getElementById("content").style.display = "none";
}

let open = document.getElementById("open");
open.addEventListener("click", openMe);

function openMe(){
    document.getElementById("content").style.display = "block"
}