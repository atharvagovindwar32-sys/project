var a = document.querySelector("main");
var b = document.querySelector("button");

let arr = [
    "hello", "hi", "bye", "welcome",
    "good morning", "good night", "how are you"
];

b.addEventListener("click", function() {

    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    var rotate = Math.random() * 360;
    var scl = Math.random() * 2;

    var hi = document.createElement("h1");

    var p = Math.floor(Math.random() * arr.length);
    hi.innerHTML = arr[p];

    a.appendChild(hi);

    hi.style.position = "absolute";
    hi.style.left = x + "px";
    hi.style.top = y + "px";

    // ✅ transform
    hi.style.transform = `rotate(${rotate}deg) scale(${scl})`;

    // ✅ random color
   let r = Math.floor(Math.random() * 156) + 100;
let g = Math.floor(Math.random() * 156) + 100;
let b1 = Math.floor(Math.random() * 156) + 100;
    hi.style.color = `rgb(${r}, ${g}, ${b1})`;

    // ✅ random font size
    hi.style.fontSize = Math.random() * 40 + 20 + "px";

    // ✅ prevent blocking button clicks
    hi.style.pointerEvents = "none";
});