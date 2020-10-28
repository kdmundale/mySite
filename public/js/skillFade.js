
window.addEventListener('load', (event) => {

var text = ["PYTHON3","JAVASCRIPT","HTML / CSS","BASH","POSTGRESQL / MYSQL","PHP","NODE.JS","EXPRESS / EJS",
"WEBPACK", "PGADMIN", "FLASK", "GIT VERSION CONTROL", "MICROSOFT WORD / EXCEL", "PHOTO EDITING"];
var counter = 0;
var elem = document.getElementById("skill");
var inst = setInterval(change, 2000);

function change() {

  elem.innerHTML = text[counter];
  unfade(elem);
  fade(elem);
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}

});

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}
function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}
