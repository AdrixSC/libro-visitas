var config = {
    apiKey: "AIzaSyDykVz24etO9iCt56QLzWDQWV69JAKmt1M",
    authDomain: "libro-visitas-42ea3.firebaseapp.com",
    databaseURL: "https://libro-visitas-42ea3.firebaseio.com",
    projectId: "libro-visitas-42ea3",
    storageBucket: "",
    messagingSenderId: "314900517412"
};
firebase.initializeApp(config);

var commentsRef = firebase.database().ref("comments/");

commentsRef.on("value", function(snapshot) {
    console.log("se hizo un cambio");
});

function writeComment() {
    commentsRef.push({ content: "test" });
}

function updateTest() {
    commentsRef.update({ 1: { content: "bye" } });
}

function deleteTest() {
    firebase
        .database()
        .ref("comments/0")
        .remove(function() {
            console.log("done");
        });
}