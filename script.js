function changePlansAndPricing(ev) {
  if (ev.getAttribute("month-show") === "true") {
    ev.setAttribute("month-show", "false");
    toggleClass(false);
    togglePrices("$12", "$36", "$56");
  } else {
    ev.setAttribute("month-show", "true");
    toggleClass(true);
    togglePrices("$19", "$54", "$89");
  }
}

function toggleClass(isMonthly) {
  const elementToRemove = isMonthly
    ? document.querySelector(".yearly")
    : document.querySelector(".monthly");
  const elementToAdd = !isMonthly
    ? document.querySelector(".yearly")
    : document.querySelector(".monthly");

  elementToRemove.classList.remove("selected");
  elementToAdd.classList.add("selected");
}

function togglePrices(starterPrice, professionalPrice, companyPrice) {
  const starter = document.getElementById("starter");
  const professional = document.getElementById("professional");
  const company = document.getElementById("company");

  starter.innerHTML = starterPrice;
  professional.innerHTML = professionalPrice;
  company.innerHTML = companyPrice;
}
