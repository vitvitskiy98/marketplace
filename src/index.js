
import './sass/styles.scss';
// const DOM = require("./js/DOM");
// import dog1 from './assets/pets-scarlet.jpg';
/* const mainImage = document.getElementById('mainImage');
mainImage.src = dog1; */
console.log("А тут будет код из другого файла.");

import firstChosen from './assets/images/chosen-1.png';
const firstChosenImg = document.querySelector(".chosen-img-img");
firstChosenImg.src = firstChosen;

import secondChosen from './assets/images/chosen-2.png';
const secondChosenImg = document.querySelectorAll(".chosen-img-img")[1];
secondChosenImg.src = secondChosen;

import thirdChosen from './assets/images/chosen-3.png';
const thirdChosenImg = document.querySelectorAll(".chosen-img-img")[2];
thirdChosenImg.src = thirdChosen;


import firstOutOfStock from './assets/images/chosen-1-out.png';
const firstChosenOut = document.querySelectorAll(".chosen-img-img-out")[0];
firstChosenOut.src = firstOutOfStock;

import secondOutOfStock from './assets/images/chosen-2-out.png';
const secondChosenOut = document.querySelectorAll(".chosen-img-img-out")[1];
secondChosenOut.src = secondOutOfStock;

import thirdOutOfStock from './assets/images/chosen-3-out.png';
const thirdChosenOut = document.querySelectorAll(".chosen-img-img-out")[2];
thirdChosenOut.src = thirdOutOfStock;


import firstChosenDelivery from './assets/images/chosen-1-small.png';
const firstChosenDeliveryImg = document.querySelectorAll(".chosen-items-delivery")[0];
firstChosenDeliveryImg.src = firstChosenDelivery;

import secondChosenDelivery from './assets/images/chosen-2-small.png';
const secondChosenDeliveryImg = document.querySelectorAll(".chosen-items-delivery")[1];
secondChosenDeliveryImg.src = secondChosenDelivery;

import thirdChosenDelivery from './assets/images/chosen-3-small.png';
const thirdChosenDeliveryImg = document.querySelectorAll(".chosen-items-delivery")[2];
thirdChosenDeliveryImg.src = thirdChosenDelivery;

import fourthChosenDelivery from './assets/images/chosen-2-small.png';
const fourthChosenDeliveryImg = document.querySelectorAll(".chosen-items-delivery")[3];
fourthChosenDeliveryImg.src = secondChosenDelivery;

const totalNumbers = document.querySelectorAll(".total-number");
// function watchFontSize() {
//     return totalNumbers.forEach(elem => elem.innerHTML.length > 5 ?
//         elem.style.cssText = "color: #000; text-align: right; font-family: Segoe UI; font-size: 16px;font-style: normal; font-weight: 700; line-height: 24px;"
//      : elem.style.cssText = "color: #000; text-align: right; font-family: Segoe UI; font-size: 20px; font-style: normal; font-weight: 700; line-height: 28px; letter-spacing: -0.2px;"
//       )
// }
// totalNumbers.forEach(totalNumber => {
//     totalNumber.addEventListener("change", watchFontSize);
// })

totalNumbers.forEach(elem => elem.innerHTML.length > 5 ?
            elem.style.cssText = "color: #000; text-align: right; font-family: Segoe UI; font-size: 16px;font-style: normal; font-weight: 700; line-height: 24px;"
         : elem.style.cssText = "color: #000; text-align: right; font-family: Segoe UI; font-size: 20px; font-style: normal; font-weight: 700; line-height: 28px; letter-spacing: -0.2px;"
          )

const totalBlocks = document.querySelectorAll(".total-block");
totalNumbers.forEach(elem => console.log(elem.innerHTML.length > 5))

// totalBlocks.forEach((block) => totalNumbers.forEach(number => { 
//     if(number.innerHTML.length > 5) {
//          block.style.marginLeft ="20px";
//         } 
//          else { 
//             block.style.marginLeft ="55px";
//         }
//   })
// )
const counterValues = document.querySelectorAll(".counter-quantity")
function watchPaddingInput() {
    counterValues.forEach(elem => {
        if (elem.value > 99) {
            console.log(elem.value)
            elem.style.paddingLeft = "10px";
        }
        else {
            elem.style.paddingLeft = "18px";
        }
    }
    )
}
counterValues.forEach(counterValue => {
    counterValue.addEventListener("change", watchPaddingInput)
})
window.addEventListener("load",watchPaddingInput)


// first counter
const counterButtons = [document.querySelectorAll(".counter-btn")[0],document.querySelectorAll(".counter-btn")[1]];
const counterNumber = document.querySelector(".counter-quantity");
let counter = 1;
counterButtons.forEach((counterBtn,index) => {
    counterBtn.addEventListener("click", () => {
      if(index === 0 && counter > 1) {
          counter--;
      } else if (index === 1 && counter < 3) {
          counter++;
      }
        counterNumber.value = counter;
        setDisabledBtn(counter,counterButtons, 3, 0, 1);
        updatePrice1(counter);
        updateDiscount1(counter);
    });
});
counterNumber.addEventListener("change", e => {
    counter = Number(e.target.value)
    console.log("counterNumber:", counter)
    setDisabledBtn(counter,counterButtons, 3, 0, 1);
    updatePrice1(counter);
    updateDiscount1(counter);
})

//second counter 
const counterButtonsSecond = [document.querySelectorAll(".counter-btn")[2],document.querySelectorAll(".counter-btn")[3]];
const counterNumberSecond = document.querySelectorAll(".counter-quantity")[1];
let counter2 = 1;
console.log("counterButtonsSecond:", counterButtonsSecond)
counterButtonsSecond.forEach((counterBtnScd,index) => {
    console.log("counterBtnScd:", counterBtnScd)
    counterBtnScd.addEventListener("click", function() {
      if(index === 0 && counter2 > 1) {
          counter2--;
      } else if (index === 1 && counter2 < 200) {
          counter2++;
      }
        counterNumberSecond.value = counter2;
        setDisabledBtn(counter2,counterButtonsSecond, 200, 0, 1);
        updatePrice2(counter2);
        updateDiscount2(counter2);
    });
});
counterNumberSecond.addEventListener("change", e => {
    counter2 = Number(e.target.value);
    console.log("counterNumberSecond:", counter2);
    setDisabledBtn(counter2,counterButtonsSecond, 200, 0, 1);
    updatePrice2(counter2);
    updateDiscount2(counter2);
})


// third counter

const counterButtonsThird = [document.querySelectorAll(".counter-btn")[4],document.querySelectorAll(".counter-btn")[5]];
const counterNumberThird = document.querySelectorAll(".counter-quantity")[2];
let counter3 = 1;
console.log("counterButtonsThird:", counterButtonsThird)
counterButtonsThird.forEach((counterBtnTrd,index) => {
    console.log("counterBtnTrd:", counterBtnTrd)
    counterBtnTrd.addEventListener("click", function() {
      if(index === 0 && counter3 > 1) {
          counter3--;
      } else if (index === 1 && counter3 < 200) {
          counter3++;
      }
        counterNumberThird.value = counter3;
        setDisabledBtn(counter3,counterButtonsThird, 200, 0, 1);
        updatePrice3(counter3);
        updateDiscount3(counter3);
    });
});
counterNumberThird.addEventListener("change", e => {
    counter3 = Number(e.target.value);
    console.log("counterNumberThird:", counter3);
    setDisabledBtn(counter3,counterButtonsThird, 200, 0, 1);
    updatePrice3(counter3);
    updateDiscount3(counter3);
})


function setDisabledBtn(counter, counterBtns, numberLimit, numberFirst, numberSecond) {
    if(counter ===1) {
        counterBtns[numberFirst].disabled = true;
    } else if (counter === numberLimit) {
        counterBtns[numberSecond].disabled = true;
    }
    else {
        counterBtns[numberFirst].disabled = false;
        counterBtns[numberSecond].disabled = false;
    }
}








// update price
function updatePrice1(selectedPrice1Counter) {
   return totalNumbers[0].innerHTML = 522 * selectedPrice1Counter
}
function updatePrice2(selectedPrice2Counter) {
    return totalNumbers[1].innerHTML = Math.ceil(10500.235 * selectedPrice2Counter)
}

function updatePrice3(selectedPrice3Counter) {
    return totalNumbers[2].innerHTML = 247 * selectedPrice3Counter
}


// update discount

const allDiscounts = document.querySelectorAll(".total-old-price");

function updateDiscount1(selectedPrice1Counter) {
    return allDiscounts[0].innerHTML = 1051 * selectedPrice1Counter + "  сом";
}

function updateDiscount2(selectedPrice2Counter) {
    return allDiscounts[1].innerHTML = Math.ceil(11500.235 * selectedPrice2Counter) + "  сом";
}

function updateDiscount3(selectedPrice3Counter) {
    return allDiscounts[2].innerHTML = 475 * selectedPrice3Counter + "  сом";
}




// const inputs = [document.querySelectorAll("input")[8],document.querySelectorAll("input")[9],
// document.querySelectorAll("input")[10],document.querySelectorAll("input")[11],
// document.querySelectorAll("input")[12]];

// inputs.forEach(input => {
//     if(input.innerHTML = ""|| input.innerHTML.length === 0) {
//     input.style.borderBottomColor ="gray";
//     }
// })

// selectall
const selectAll = document.getElementById("choose");
const chooseItems = document.querySelectorAll(".choose-checkbox");

 function selectAllItems() {
    const isChecked = selectAll.checked;
        for (let i =0; i < chooseItems.length; i++) {
            chooseItems[i].checked = isChecked;
        }
    
}
selectAll.addEventListener('click', selectAllItems);



for(let product of document.querySelectorAll(".chosen-product")){
    product.addEventListener("click",function(event){
      let target = event.target;
      if(target.closest(".delete")){
        //this.remove()
        //this.hidden = true
        this.classList.add("display-none")
      }  
    })
  }


// popups

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


changePaymentBtn.addEventListener('click', function(event){
    event.preventDefault();
    secondPopup.classList.add("active");
})
secondChangeIcon.addEventListener('click', function(event){
  event.preventDefault();
  secondPopup.classList.add("active");
})

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





