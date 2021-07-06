
// deel 1
document.getElementById('mybutton').onclick = function changeContent() {
    alert ("button clicked");
}

// deel 2


 document.getElementById('change-background').onclick = function chBackcolor() {
    document.body.className = document.body.className.replace("blue-background","red-background");}

// deel 3

function SwitchColors() {
        var element = document.body;
        element.classList.toggle("red-background");
      }


document.getElementById('toggleColor').onclick = function swBackcolor() {
            SwitchColors();}
        