const totalNumbers = document.querySelectorAll(".total-number");


totalNumbers.forEach(elem => elem.innerHTML.length > 5 ?
            elem.style.cssText = "color: #000; text-align: right; font-family: Segoe UI; font-size: 16px;font-style: normal; font-weight: 700; line-height: 24px;"
         : elem.style.cssText = "color: #000; text-align: right; font-family: Segoe UI; font-size: 20px; font-style: normal; font-weight: 700; line-height: 28px; letter-spacing: -0.2px;"
          )



// first counter
const counterButtons = [document.querySelectorAll(".counter-btn")[0],document.querySelectorAll(".counter-btn")[1]];
const counterNumber = document.querySelector(".counter-quantity");
let counter = Number(counterNumber.value);
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
    counter = Number(e.target.value);
    if(counter > 3) {
        window.location.reload();
    }
    setDisabledBtn(counter,counterButtons, 3, 0, 1);
    updatePrice1(counter);
    updateDiscount1(counter);
})



//second counter 
const counterButtonsSecond = [document.querySelectorAll(".counter-btn")[2],document.querySelectorAll(".counter-btn")[3]];
const counterNumberSecond = document.querySelectorAll(".counter-quantity")[1];
let counter2 = Number(counterNumberSecond.value);
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
        updatePrice2(counter2);
        updateDiscount2(counter2);
    });
});
counterNumberSecond.addEventListener("change", e => {
    counter2 = Number(e.target.value);
    if(counter2 > 200 ) {
        window.location.reload();
    }
    setDisabledBtn(counter2,counterButtonsSecond, 200, 0, 1);
    updatePrice2(counter2);
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
 