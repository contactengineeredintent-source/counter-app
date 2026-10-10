let count = 0;
let counterEl = document.getElementById("currentCounter");
let errorEl = document.getElementById("errorMessage");
let counterValue = document.getElementById("countValue");
// counterEl.classList.add("text-white");
// counterEl.classList.add("fs-5");
// counterEl.textContent = "Your current count is : 0";
errorEl.classList.add("text-danger");
errorEl.classList.add("fs-6");
errorEl.textContent = "Error : Cannot go below 0";
let increase = document.getElementById("btnIncrease");
let decrease = document.getElementById("btnDecrease");
let btnClear = document.createElement("button");
btnClear.textContent = "Clear";
btnClear.classList.add("btn");
btnClear.classList.add("btn-light");
// increase button
increase.addEventListener("click", (event) => {
  event.preventDefault();
  //   adding the clear button
  btnSection.appendChild(btnClear);
  //   removing the error message
  errorEl.textContent = "";
  count++;
  btnClear.disabled = false;
  counterValue.textContent = count;
//   console.log(count);
});
// decrease button
decrease.addEventListener("click", (event) => {
  event.preventDefault();
  if (count > 0) {
    count--;
    counterValue.textContent = count;
  }
  if (count == 0) {
    btnClear.disabled = true;
    btnClear.remove();
    errorEl.classList.add("text-danger");
    errorEl.classList.add("fs-6");
    errorEl.textContent = "Error : Cannot go below 0";
    return;
  }
//   console.log(count);
});
// clear button
btnClear.addEventListener("click", (event) => {
  event.preventDefault();
  count = 0;
  counterValue.textContent = count;
  btnClear.remove();
  errorEl.classList.add("text-danger");
  errorEl.classList.add("fs-6");
  errorEl.textContent = "Error : Cannot go below 0";
});
