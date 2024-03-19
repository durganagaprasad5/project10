var num=(Math.ceil(Math.random()*100));
var count=1;
console.log(num)
function check(){
    var numuser=parseInt(document.getElementById("n1").value);
    if (numuser==num){
        document.getElementById("res").textContent="congrats!! you guessed it right in "+count+" tries";
    }
    else if(numuser>num){
        document.getElementById("res").textContent="Try with lesser number";

    }
    else if(numuser<num){
        document.getElementById("res").textContent="Try with Greater number";

    }
    document.getElementById("tries").textContent=count;
    count++;

}

