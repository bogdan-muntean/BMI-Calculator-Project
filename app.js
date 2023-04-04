const calcBtn = document.querySelector(".calc-btn");
let imc = 0;

calcBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const cm = parseInt(document.querySelector("#height").value);
  const kg = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  let resultToAdd = "";
  if (cm === "" || cm < 0 || isNaN(cm))
    resultToAdd += "Introduceti o valoarea corecta pentru inaltime. \n";
  if (kg === "" || kg < 0 || isNaN(kg))
    resultToAdd += "Introduceti o valoarea corecta pentru greutate. \n";
  else {
    const m = cm / 100.0;
    imc = (kg / (m * m)).toFixed(2);
    let color = "";
    if (imc < 18.6 || imc > 24.9) color = "red";
    else if (imc >= 18.6 && imc <= 24.9) color = "green";
    resultToAdd = `IMC-ul este <span class="imc" style="color:${color};">${imc}</span>`;
  }
  results.innerHTML = resultToAdd;
});
