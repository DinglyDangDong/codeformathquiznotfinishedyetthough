function nextPage (){
    var p1 = document.getElementById("inp1").value;
    var p2 = document.getElementById("inp2").value;
    localStorage.setItem("i1", p1);
    localStorage.setItem("i2", p2);
    
    window.location = "game.html";

}