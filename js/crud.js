var comments = [
    meGusta = {
        comment: "me gusta",
        style: {
            color: "pink",
            backgroundColor: "yellow",
            fontSize: "20px",
            textAlign: "center"
        }
    },
    gracias = {
        comment: "gracias",
        style: {
            color: "yellow",
            backgroundColor: "blue",
            fontSize: "10px",
            textAlign: "left"
        }
    }
];

//traer boton que ejecutará la acción de enviar comentario, darle el evento
var btnSendComment = document.getElementById("btnSend");
btnSendComment.addEventListener("click", addComment);

//traer elemento contenedor de los comentarios anteriores
var pastComments = document.getElementById("comentarios-pasados");

//funcion para pintar comentarios
function drawComments() {
    pastComments.innerHTML = " ";
    for (var i = 0; i < comments.length; i++) {
        console.log(comments[i]);
        var containerDom = creatCommentsDom(comments[i]);
        console.log(containerDom);
        pastComments.appendChild(containerDom);
    };
};

//funcion para crear nueva data
function creatCommentsDom(data) {
    var dataComments = data.content;
    var commentContainerDom = document.createElement("div");
    var btnDelete = document.createElement("button");
    commentContainerDom.innerHTML = dataComments;
    commentContainerDom.className = "comentario-pasado";
    Object.assign(commentContainerDom.style, data.style);
    return commentContainerDom;
    console.log(commentContainerDom);
};

//funcion para agregar nuevo comentario al contenedor de comentarios
function addComment() {
    var newCommentUser = commentUser.innerHTML;
    console.log(newCommentUser);
    var newComment = {
        comment: null,
        style: {}
    };
    newComment.content = newCommentUser;
    Object.assign(newComment.style, commentUser.style);
    comments.unshift(newComment);
    console.log(newComment);
    console.log(comments);

    drawComments()

};