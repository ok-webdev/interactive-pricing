const inputRange = document.querySelector(".pricing__range"),
  pageviews = document.querySelector(".pricing__pageviews-value"),
  pricingSum = document.querySelectorAll(".pricing__sum-value"),
  pricingSwitch = document.querySelector(".pricing__switch"),
  modal = document.querySelector('.modal'),
  modalClose = document.querySelector('.modal__close'),
  modalBtn = document.querySelector('#modal__btn'),
  trialBtn = document.querySelector('#pricing__trial');


function calc() {
  switch (inputRange.value) {
    case "1":
      pageviews.textContent = "10k";
      if (pricingSwitch.checked) {
        pricingSum.forEach((i) => (i.textContent = "6.00"));
      } else {
        pricingSum.forEach((i) => (i.textContent = "8.00"));
      }
      break;
    case "2":
      pageviews.textContent = "50k";
      if (pricingSwitch.checked) {
        pricingSum.forEach((i) => (i.textContent = "9.00"));
      } else {
        pricingSum.forEach((i) => (i.textContent = "12.00"));
      }
      break;
    case "3":
      pageviews.textContent = "100k";
      if (pricingSwitch.checked) {
        pricingSum.forEach((i) => (i.textContent = "12.00"));
      } else {
        pricingSum.forEach((i) => (i.textContent = "16.00"));
      }
      break;
    case "4":
      pageviews.textContent = "500k";
      if (pricingSwitch.checked) {
        pricingSum.forEach((i) => (i.textContent = "18.00"));
      } else {
        pricingSum.forEach((i) => (i.textContent = "24.00"));
      }
      break;
    case "5":
      pageviews.textContent = "1m";
      if (pricingSwitch.checked) {
        pricingSum.forEach((i) => (i.textContent = "27.00"));
      } else {
        pricingSum.forEach((i) => (i.textContent = "36.00"));
      }
      break;
  }
}

inputRange.addEventListener("input", calc);
pricingSwitch.addEventListener('change', calc)

function showModal () {
  modal.classList.add('active');
}

function hideModal () {
  modal.classList.remove('active');
}

trialBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showModal();
});

modal.addEventListener ('click', (e) => {
  if(e.target === modalClose || e.target === modalBtn) {
    hideModal();
  }
})

document.addEventListener('click', e => {
  if(e.target != modal && e.target != trialBtn) {
    hideModal();
  }
})



