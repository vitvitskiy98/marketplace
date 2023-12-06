const firstTooltip = document.querySelector(".tooltip-info")
firstTooltip.addEventListener("mouseover", e => {
    const target = e.target;
    document.querySelector(".wb-tooltip").style.display ="flex";
})

firstTooltip.addEventListener("mouseout", e => {
    document.querySelector(".wb-tooltip").style.display ="none";
})

const secondTooltip = document.querySelectorAll(".tooltip-info")[1]
secondTooltip.addEventListener("mouseover", e => {
    const target = e.target;
    document.querySelector(".mg-tooltip").style.display ="flex";
})

secondTooltip.addEventListener("mouseout", e => {
    document.querySelector(".mg-tooltip").style.display ="none";
})

const thirdTooltip = document.querySelectorAll(".tooltip-info")[2];
thirdTooltip.addEventListener("mouseover", e => {
    document.querySelectorAll(".wb-tooltip")[1].style.display ="flex";
})

thirdTooltip.addEventListener("mouseout", e => {
    document.querySelectorAll(".wb-tooltip")[1].style.display ="none";
})