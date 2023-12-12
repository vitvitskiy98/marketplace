const firstTooltip = document.querySelector(".chosen-product-origin-icon")
firstTooltip.addEventListener("mouseover", e => {
    const target = e.target;
    document.querySelector(".wb-tooltip").style.display ="flex";
})

firstTooltip.addEventListener("mouseout", e => {
    document.querySelector(".wb-tooltip").style.display ="none";
})


const secondTooltip = document.querySelectorAll(".chosen-product-origin-icon")[1]
secondTooltip.addEventListener("mouseover", e => {
    const target = e.target;
    document.querySelector(".mg-tooltip").style.display ="flex";
})

secondTooltip.addEventListener("mouseout", e => {
    document.querySelector(".mg-tooltip").style.display ="none";
})



const thirdTooltip = document.querySelectorAll(".chosen-product-origin-icon")[2];
thirdTooltip.addEventListener("mouseover", e => {
    document.querySelectorAll(".wb-tooltip")[1].style.display ="flex";
})

thirdTooltip.addEventListener("mouseout", e => {
    document.querySelectorAll(".wb-tooltip")[1].style.display ="none";
})



const freeReturn = document.querySelector(".return-delivery-paragraph span");
freeReturn.addEventListener("mouseover", e => {
    document.querySelector(".sber-tooltip").style.display = "flex";
})

freeReturn.addEventListener("mouseout", e => {
    document.querySelector(".sber-tooltip").style.display = "none";
})

const secondFreeReturn = document.querySelector(".return-deliveryparagraph span");

secondFreeReturn.addEventListener("mouseover", e => {
    document.querySelectorAll(".sber-tooltip")[1].style.display = "flex";
})

secondFreeReturn.addEventListener("mouseout", e => {
    document.querySelectorAll(".sber-tooltip")[1].style.display = "none";
})

 const firstDiscountParagraph = document.querySelectorAll(".total-old-price")[0];

 firstDiscountParagraph.addEventListener("mouseover", e => {
    document.querySelectorAll(".discount-tooltip-1")[0].style.display = "flex";
})

firstDiscountParagraph.addEventListener("mouseout", e => {
    document.querySelectorAll(".discount-tooltip-1")[0].style.display = "none";
})

const secondDiscountParagraph = document.querySelectorAll(".total-old-price")[1];

secondDiscountParagraph.addEventListener("mouseover", e => {
   document.querySelectorAll(".discount-tooltip-1")[1].style.display = "flex";
})

secondDiscountParagraph.addEventListener("mouseout", e => {
   document.querySelectorAll(".discount-tooltip-1")[1].style.display = "none";
})

const thirdDiscountParagraph = document.querySelectorAll(".total-old-price")[2];

thirdDiscountParagraph.addEventListener("mouseover", e => {
   document.querySelectorAll(".discount-tooltip-1")[2].style.display = "flex";
})

thirdDiscountParagraph.addEventListener("mouseout", e => {
   document.querySelectorAll(".discount-tooltip-1")[2].style.display = "none";
})