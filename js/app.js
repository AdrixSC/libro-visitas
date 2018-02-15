

var mediumText = function() {
    document.getElementById("btn-medium").style.fontSize = 40 + "pt";
}

var smallText = function() {
    document.getElementById("btn-small").style.fontSize = 10 + "pt";
}

var colorText = function() {
    var colorUser = prompt("Escribe el color que quieres en tu mensaje");
    document.getElementById("btn-text-color").style.color = colorUser;
}

var backagroundColor = function() {
    var backgroundUser = prompt("Escribe el color que quieres de fondo")
    document.getElementById("btn-bkg-color").style.color = backgroundUser;
}

var leftText = function() {
    document.getElementById("btn-left").style.textAlign = "left";
}

var centerText = function() {
    document.getElementById("btn-center").style.textAlign = "center";
}

var rigthText = function() {
    document.getElementById("btn-rigth").style.tectAlign = "rigth";
}



/*
var containerComment = document.getElementById("comment-container");

var btnLarge = addEventListener("click", largeText);*/

/*addEventListener("click", largeText);

var btnLarge = function(event) {
    var largeText = document.getElementById("btn-large").style.fontSize = 80 + "pt";
}*/

//Traer elementos del html
var textArea = document.getElementById('textarea-comment');
var commentUser = document.getElementById("comment-user");
var btnLarge = document.getElementById("btn-large");

//Agregar eventos a los elementos
textArea.addEventListener("keyup", viewText);
btnLarge.addEventListener("click", largeText);
//console.log(textArea.value);

//Funcion para que se pinte en tiempo real el comentario del textarea
function viewText () {
  var textUser = textArea.value;
  commentUser.innerText = textUser;
  //console.log(textUser);
  return commentUser;
}



//Funcion para hacer el texto grande
function largeText () {
    commentUser.style.fontSize = "80px";
}


/*function styleFontLarge () {
  textUser.style.fontSize = 80 + "pt";
}*/


/*var divContainerComment = document.getElementById("comment-container");
var divCommentUser = document.getElementById("comment-user").appendChild(textArea);
divContainerComment.appendChild(divCommentUser);
var divSectionComment = document.getElementById("comment-section");
divSectionComment.appendChild(divContainerComment);*/
