var comments = [
    hola = {
        comment: "hola",
        style: {
            color: "pink",
            backgroundColor: "yellow",
            fontSize: "20px",
            textAlign: "center"
        }
    },
    adios = {
        comment: "adios",
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
btnSendComment.addEventListener("click", drawComments);

//crear elementos
var divNewComment = document.createElement("div");
var newComment = document.createElement("p");

//agregar elementos a su padre y a un elemento existente
divNewComment.appendChild(newComment);
var containerComments = document.getElementById("container-comments");
containerComments.appendChild(divNewComment);

//funcion para pintar comentarios
function drawComments() {
    var commentNewUsser = document.createTextNode(commentUser)
        //var commentNewUsser = commentUser.innerHTML;
    comments.unshift(commentNewUsser);
    console.log(comments);
    console.log(commentNewUsser);
    //containerComments.appendChild(commentNewUsser);
    newComment.appendChild(commentNewUsser);
}