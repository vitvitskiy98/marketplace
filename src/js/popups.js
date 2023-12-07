// popups

import { paymentMethodOptions } from "./paymentOptions";
import PaymentPopup from "./PaymentPopup";
// first popup
const changeDeliveryBtn = document.querySelector(".change-delivery");
const firstChangeIcon = document.querySelector(".change-icon-block");
const firstPopup = document.querySelectorAll(".pop_up")[0];
const btnClose = document.querySelectorAll(".pop_up_close")[0]
//   const deleteAdressBtns = document.querySelectorAll(".pop-up-adress-block svg");

changeDeliveryBtn.addEventListener('click', function(event){
    event.preventDefault();
    firstPopup.classList.add("active")
})
firstChangeIcon.addEventListener('click', function(event){
  event.preventDefault();
  firstPopup.classList.add("active")
})

btnClose.addEventListener("click",function(event){
     firstPopup.classList.remove("active")
})

for(let adressBlock of document.querySelectorAll(".pop-up-adress-block")){
  adressBlock.addEventListener("click",function(event){
    let target = event.target;
    if(target.closest(".delete")){
      this.remove();
    }  
  })
}



// second popup

const changePaymentBtn = document.querySelector(".change-payment");
const secondChangeIcon = document.querySelectorAll(".change-icon-block")[1];
const secondPopup = document.querySelectorAll(".pop_up")[1];
const btnCloseSecond = document.querySelectorAll(".pop_up_close")[1];



// changePaymentBtn.addEventListener('click', function(event){
//   event.preventDefault();
//   secondPopup.classList.add("active");
// })
// secondChangeIcon.addEventListener('click', function(event){
// event.preventDefault();
// secondPopup.classList.add("active");
// })

// btnCloseSecond.addEventListener("click",function(event){
//    secondPopup.classList.remove("active")
// })

for(let adressBlock of document.querySelectorAll(".pop-up-adress-block")){
adressBlock.addEventListener("click",function(event){
  let target = event.target;
  if(target.closest(".delete")){
    this.remove();
  }  
})
}


function handlePaymentMethodFormSubmit() {
    const selectedOption = document.querySelector('input[name="creditCard"]:checked');
    if (selectedOption) {
      const choiceValue = selectedOption.value;
      const data = paymentMethodOptions[choiceValue];
      const cardNumberResults = document.querySelectorAll(".card-number-result");
      cardNumberResults.forEach((result) => {
        result.textContent = data.number;
      });
      document.querySelector(".card-validity-result").textContent = data.validity;
      const cardImageResults = document.querySelectorAll(".selected-img");
      cardImageResults.forEach((result) => {
        console.log(result)
        result.alt = data.alt;
        result.src = data.icon;
        result.className = data.cssClass;
      });
    }
  }

//  const paymentMethodForm = document.getElementById("payment-form");
//  function handler (e) {
//     e.preventDefault();
//     handlePaymentMethodFormSubmit();
//     secondPopup.classList.remove("active");
//  }
//  paymentMethodForm.addEventListener("submit", handler)



const btnEditPaymentIcon = document.querySelectorAll(".change-icon-block")[1];
const btnEditPaymentText = document.querySelector(".change-payment");
const paymentPopup = new PaymentPopup(".pop-up-payment", handlePaymentMethodFormSubmit);
paymentPopup.setEventListeners();
btnEditPaymentText.addEventListener("click", () => {
  paymentPopup.open();
});
btnEditPaymentIcon.addEventListener("click", () => {
  paymentPopup.open();
});