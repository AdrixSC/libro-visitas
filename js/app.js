//Traer elementos del html
var textArea = document.getElementById('textarea-comment');
var commentUser = document.getElementById("comment-user");
var btnLarge = document.getElementById("btn-large");
var btnMedium = document.getElementById("btn-medium");
var btnSmall = document.getElementById("btn-small");
var btnTextColor = document.getElementById("btn-text-color");
var btnBkgColor = document.getElementById("btn-bkg-color");
var btnLeft = document.getElementById("btn-left");
var btnCenter = document.getElementById("btn-center");
var btnRight = document.getElementById("btn-right");

//Agregar eventos a los elementos
textArea.addEventListener("keyup", viewText);
btnLarge.addEventListener("click", largeText);
btnMedium.addEventListener("click", mediumText);
btnSmall.addEventListener("click", smallText);
btnTextColor.addEventListener("click", textColor);
btnBkgColor.addEventListener("click", backgroundColorText);
btnLeft.addEventListener("click", alignLeft);
btnCenter.addEventListener("click", alignCenter);
btnRight.addEventListener("click", alignRight);

//Funcion para que se pinte en tiempo real el comentario del textarea
function viewText() {
    var textUser = textArea.value;
    commentUser.innerText = textUser;
    //console.log(textUser);
    return commentUser;
}

//Funcion para hacer el texto grande
function largeText() {
    commentUser.style.fontSize = "80px";
}

//Funcion para hacer el texto mediano
function mediumText() {
    commentUser.style.fontSize = "40px";
}

//Funcion para hacer el texto pequeño
function smallText() {
    commentUser.style.fontSize = "10px";
}

//Funcion para hacer el texto de color
function textColor() {
    var colorUser = prompt("Escribe el color que quieres en tu mensaje");
    commentUser.style.color = colorUser;
}

//Funcion para hacer el fondo del texto de color
function backgroundColorText() {
    var backgroundUser = prompt("Escribe el color que quieres de fondo")
    commentUser.style.backgroundColor = backgroundUser;
}

//Funcion para alinear el texto a la izquierda
function alignLeft() {
    commentUser.style.textAlign = "left";
}

//Funcion para alinear el texto al centro
function alignCenter() {
    commentUser.style.textAlign = "center";
}

//Funcion para alinear el texto a la derecha
function alignRight() {
    commentUser.style.textAlign = "right";
}


/*var divContainerComment = document.getElementById("comment-container");
var divCommentUser = document.getElementById("comment-user").appendChild(textArea);
divContainerComment.appendChild(divCommentUser);
var divSectionComment = document.getElementById("comment-section");
divSectionComment.appendChild(divContainerComment);*/