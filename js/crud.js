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

//funcion para pintar comentarios
function drawComments() {
  //crear elementos
  var divNewComment = document.createElement("div");
  var newComment = document.createElement("p");

  //agregar elementos a su padre y a un elemento existente
  divNewComment.appendChild(newComment);
  var containerComments = document.getElementById("container-comments");
  containerComments.appendChild(divNewComment);

}

function addComment () {
  var newComment = {
    comment : null,
    style : {
      color: "",
      backgroundColor: "",
      fontSize: "",
      textAlign: ""
    }
  }
  comments.unshift(newComment);
  console.log(newComment);
  console.log(comments);

  drawComments()

}
