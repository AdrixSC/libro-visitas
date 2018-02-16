/*var largeText = function() {
    document.getElementById("btn-large").style.fontSize = 80 + "pt";
}

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
}*/


/*
var containerComment = document.getElementById("comment-container");

var btnLarge = addEventListener("click", largeText);*/

var btnLarge = function(event) {
    var largeText = document.getElementById("btn-large").style.fontSize = 80 + "pt";
    addEventListener("click", largeText);
}


var text = function() {
    var textArea = document.getElementById('exampleFormControlTextarea1').value;
    console.log(textArea)
}

text();


//var prueba = textArea.value;
/*var divContainerComment = document.getElementById("comment-container");
var divCommentUser = document.getElementById("comment-user").appendChild(textArea);
divContainerComment.appendChild(divCommentUser);
var divSectionComment = document.getElementById("comment-section");
divSectionComment.appendChild(divContainerComment);*/