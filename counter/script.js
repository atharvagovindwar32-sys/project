var a1 = document.querySelector("#inner");
var set = 0;
var per = document.querySelector("#inner h1");  // fixed
var b = document.querySelector("button");       // fixed
var out = document.querySelector("#outer");

b.addEventListener("click", function(){
    var r=Math.floor(Math.random()*50)+50;
    var s = setInterval(function(){
        set++;
        per.innerHTML = set + "%";
        out.style.width = set + "%";
    }, r);

    setTimeout(function(){
        b.innerHTML = "Time's Up!";
        b.style.opacity = "0.5";
        b.style.pointerEvents = "none";
        clearInterval(s);
    }, r*100);
});