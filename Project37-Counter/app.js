const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

let num = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("btn-danger")) {
      num--;
    } else if (styles.contains("btn-success")) {
      num++;
    } else {
      num = 0;
    }
    value.textContent = num;
    if (num < 0) {
      value.style.color = "red";
    } else if (num > 0) {
      value.style.color = "green";
    } else {
      value.style.color = "black";
    }
  });
});
