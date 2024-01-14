
// first counter
const counterButtons = [document.querySelectorAll(".counter-btn")[0],document.querySelectorAll(".counter-btn")[1]];
const counterNumber = document.querySelector(".counter-quantity");
let counter = Number(counterNumber.value);
counterButtons.forEach((counterBtn,index) => {
    counterBtn.addEventListener("click", () => {
      if(index === 0 && counter > 1) {
          counter--;
      } else if (index === 1 && counter <=2) {
          counter++;
      }
        counterNumber.value = counter;
        setDisabledBtn(counter,counterButtons, 2, 0, 1);
        updatePrice1(counter);
        updateDiscount1(counter);
    });
});
counterNumber.addEventListener("change", e => {
    counter = Number(e.target.value);
    if(counter > 3) {
        window.location.reload();
    }
    setDisabledBtn(counter,counterButtons, 2, 0, 1);
    updatePrice1(counter);
    updateDiscount1(counter);
})



//second counter 
const counterButtonsSecond = [document.querySelectorAll(".counter-btn")[2],document.querySelectorAll(".counter-btn")[3]];
const counterNumberSecond = document.querySelectorAll(".counter-quantity")[1];
let counter2 = Number(counterNumberSecond.value);
let restDelivery = counter2 /100 *8;
console.log("counterButtonsSecond:", counterButtonsSecond)
counterButtonsSecond.forEach((counterBtnScd,index) => {
    counterBtnScd.addEventListener("click", function() {
      if(index === 0 && counter2 > 1) {
          counter2--;
      } else if (index === 1 && counter2 < 200) {
          counter2++;
      }
        counterNumberSecond.value = counter2;
        setDisabledBtn(counter2,counterButtonsSecond, 200, 0, 1);
        updatePrice2(counter2,restDelivery);
        updateDiscount2(counter2);
    });
});
counterNumberSecond.addEventListener("change", e => {
    counter2 = Number(e.target.value);
    if(counter2 > 200 ) {
        window.location.reload();
    }
    setDisabledBtn(counter2,counterButtonsSecond, 200, 0, 1);
    updatePrice2(counter2,restDelivery);
    updateDiscount2(counter2);
})

// third counter

const counterButtonsThird = [document.querySelectorAll(".counter-btn")[4],document.querySelectorAll(".counter-btn")[5]];
const counterNumberThird = document.querySelectorAll(".counter-quantity")[2];
let counter3 = Number(counterNumberThird.value);
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
    if(counter3 > 200 ) {
        window.location.reload();
    }
    setDisabledBtn(counter3,counterButtonsThird, 200, 0, 1);
    updatePrice3(counter3);
    updateDiscount3(counter3);
})


function setDisabledBtn(counter, counterBtns, numberLimit, numberFirst, numberSecond) {
    if(counter === 1) {
        counterBtns[numberFirst].disabled = true;
        counterBtns[numberSecond].disabled = false;
    } else if (counter === numberLimit) {
        counterBtns[numberFirst].disabled = false;
        counterBtns[numberSecond].disabled = true;
    }
    else {
        counterBtns[numberFirst].disabled = false;
        counterBtns[numberSecond].disabled = false;
    }
}

const totalNumbers = document.querySelectorAll(".total-number");
const totalNumbersMobile = document.querySelectorAll(".total-number-mobile");

totalNumbers.forEach((elem) =>
  elem.innerHTML.length > 5
    ? (elem.style.cssText = "font-size: 16px; line-height: 24px;")
    : (elem.style.cssText = "font-size: 20px;  line-height: 28px;")
);

// update price
function calculatePrice1(selectedPrice1Counter) {
    return 522 * selectedPrice1Counter
}
function updatePrice1(selectedPrice1Counter) {
    const price = calculatePrice1(selectedPrice1Counter)

    totalNumbers[0].innerHTML = price;
    totalNumbersMobile[0].innerHTML = price;
    document.querySelector("#delivery-counter-1").innerHTML = selectedPrice1Counter

    upateTotalPrice(price + calculatePrice2(counter2) + calculatePrice3(counter3))

    return price
 }

 function calculatePrice2(selectedPrice2Counter) {
    return Math.ceil(10500.235 * selectedPrice2Counter)
 }
 function updatePrice2(selectedPrice2Counter, quantity) {
    const price = calculatePrice2(selectedPrice2Counter)
    totalNumbers[1].innerHTML = price;
    totalNumbersMobile[1].innerHTML = price;
    document.querySelector("#delivery-counter-2").innerHTML = Number(selectedPrice2Counter - quantity);
    document.querySelector("#delivery-counter-4").innerHTML = Number(quantity);

    upateTotalPrice(price + calculatePrice1(counter) + calculatePrice3(counter3))

    return price
 }
 
 function calculatePrice3(selectedPrice3Counter) {
    return 247 * selectedPrice3Counter
 }
 function updatePrice3(selectedPrice3Counter) {
    const price = calculatePrice3(selectedPrice3Counter)
    totalNumbers[2].innerHTML = price;
    totalNumbersMobile[2].innerHTML = price;
    document.querySelector("#delivery-counter-3").innerHTML = selectedPrice3Counter

    upateTotalPrice(price + calculatePrice2(counter2) + calculatePrice1(counter))

    return price
 }

 function upateTotalPrice(price) {
    document.querySelectorAll(".total-price")[3].innerHTML = price 
 }

 updatePrice1(counter)


 
 // update discount
 
 const allOldPrices = document.querySelectorAll(".total-old-price");
 const allOldPricesMobile = document.querySelectorAll(".total-old-price-mobile");

 
 function calculateDiscount1(selectedPrice1Counter) {
    return 1051 * selectedPrice1Counter;
 }
 function updateDiscount1(selectedPrice1Counter) {
      const discount = calculateDiscount1(selectedPrice1Counter)
      allOldPrices[0].innerHTML = discount + "  сом";
      allOldPricesMobile[0].innerHTML = discount + "  сом";;
      updateTotal(discount + calculateDiscount2(counter2) + calculateDiscount3(counter3))
 }
 
 function calculateDiscount2(selectedPrice2Counter) {
    return Math.ceil(11500.235 * selectedPrice2Counter);
 }
 function updateDiscount2(selectedPrice2Counter) {
    const discount = calculateDiscount2(selectedPrice2Counter);
      allOldPrices[1].innerHTML = discount + "  сом";
      allOldPricesMobile[1].innerHTML = discount + "  сом";
      updateTotal(discount + calculateDiscount1(counter) + calculateDiscount3(counter3))
 }
 
 function calculateDiscount3(selectedPrice3Counter) {
    return 475 * selectedPrice3Counter;
 }
 function updateDiscount3(selectedPrice3Counter) {
      const discount = calculateDiscount3(selectedPrice3Counter);
      allOldPrices[2].innerHTML = discount + "  сом";
      allOldPricesMobile[2].innerHTML = discount + "  сом";
      updateTotal(discount + calculateDiscount1(counter) + calculateDiscount2(counter2))
 }

 function updateTotal(discount) {
    // document.querySelector(".items-price-total-discount").innerHTML = discount;
    document.querySelector(".total-items-price").innerHTML = discount + " cом";
 }


// calculate ultimate discount
// function ultimateDiscount() {
//     const priceWithoutDiscount = +document.querySelector(".items-price-total-number").innerHTML;
//     const totalWithDiscount = +document.querySelectorAll(".total-price")[3].innerHTML;
//     return priceWithoutDiscount - totalWithDiscount
// }   

// function calculateDiscountTotal() {
//     updateTotal(calculateDiscount1(counter) + calculateDiscount2(counter2) + calculateDiscount3(counter3)) 
//     - upateTotalPrice(calculatePrice1(counter) + calculatePrice2(counter2) + calculatePrice3(counter3))
// }

// function updateDiscountTotal(ultimateDiscount) {
//     document.querySelector(".items-price-total-discount").innerHTML =  ultimateDiscount;
// }


//  function showTotalItemNumber(selectedPrice1Counter,selectedPrice2Counter, selectedPrice3Counter) {
//     const totaItemNum = selectedPrice1Counter + selectedPrice2Counter + selectedPrice3Counter;
//     updateTotalItemNumber(totaItemNum);
//  }

//  function updateTotalItemNumber(totaItemNum) {
//     const totaItemNumber = document.querySelector(".items-quantity-number");
//     totaItemNumber.innerHTML = totaItemNum;
//  }


 for(let i = 0; i < document.querySelectorAll(".cart-counter").length; i++) {
    if(document.querySelectorAll(".cart-counter")[i].innerHTML.length >= 2) {
        document.querySelectorAll(".cart-counter-block")[i].style.width = "20px";
    }
    else if (document.querySelectorAll(".cart-counter")[i].innerHTML.length < 2) {
        document.querySelectorAll(".cart-counter-block")[i].style.width = "16px";
    }
}

