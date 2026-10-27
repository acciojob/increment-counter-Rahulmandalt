 let count = 0;

        let counter = document.getElementById("counter");
        let btn = document.getElementById("incrementBtn");

        btn.addEventListener("click", () => {
            alert(count);

            count++;
            counter.textContent = count;
        });