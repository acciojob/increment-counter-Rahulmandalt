let a = 0;

let cou = document.getElementById("rr");
let inc = document.getElementById("bb");

inc.addEventListener("click", () => {
	alert(a)
    a++;
    cou.textContent = a;

});