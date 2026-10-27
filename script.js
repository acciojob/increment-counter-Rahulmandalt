let a = 0;

let cou = document.getElementById("rr");
let inc = document.getElementById("bb");

inc.addEventListener("click", () => {
    a++;
    cou.textContent = a;

});