// popups

import { paymentMethodOptions } from "./paymentOptions";
import PaymentPopup from "./PaymentPopup";
import {pickupOptions} from "./deliveryOptions";

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

let selectedAddress;
console.log("Object.entries(pickupOptions)", Object.entries(pickupOptions))
Object.entries(pickupOptions).forEach(([id, option]) => {
  document.querySelector("#" + id).addEventListener("click", () => {
    selectedAddress = option.address
  })
})
document.querySelector(".delivery-choose-btn").addEventListener("click", () => {
  document.querySelector(".delivery-total-adress").innerHTML = selectedAddress;
  document.querySelector(".delivery-block-info-desc").innerHTML = selectedAddress;
  btnClose.click()
})


// second popup

const changePaymentBtn = document.querySelector(".change-payment");
const secondChangeIcon = document.querySelectorAll(".change-icon-block")[1];
const secondPopup = document.querySelectorAll(".pop_up")[1];
const btnCloseSecond = document.querySelectorAll(".pop_up_close")[1];


btnCloseSecond.addEventListener("click",function(event){
   secondPopup.classList.remove("active")
})

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

const editBtnPaymentIcon = document.querySelectorAll(".change-icon-block")[1];
const editBtnPaymentText = document.querySelector(".change-payment");
const paymentPopup = new PaymentPopup(".pop-up-payment", handlePaymentMethodFormSubmit);
paymentPopup.setEventListeners();
editBtnPaymentText.addEventListener("click", () => {
  paymentPopup.open();
});
editBtnPaymentIcon.addEventListener("click", () => {
  paymentPopup.open();
});


