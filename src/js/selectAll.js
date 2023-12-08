// selectall
const checkboxIds = [
  "#choose2",
  "#choose3",
  "#choose4"
]
const checkboxes = checkboxIds.map(id => document.querySelector(id))
let selectedIds = (function () {
  try {
    return JSON.parse(localStorage.selectedCheckboxes)
  } catch {
    return []
  }
})()
function saveSelectedItems(items) {
  try {
    localStorage.selectedCheckboxes = JSON.stringify(items)
  } catch {}
}



const selectAll =  document.getElementById("choose");
const itemsQuantity = document.querySelector(".cart-counter");

(function() {
  for (const id of selectedIds) {
    try {
      document.querySelector(id).checked = true;
    } catch {}
  }
  if (selectedIds.length == checkboxIds.length) {
    selectAll.checked = true
  }
  itemsQuantity.innerHTML = String(selectedIds.length)
})()

 function selectAllItems() {
    const isChecked = selectAll.checked;
    for (const checkbox of checkboxes) {
      checkbox.checked = isChecked
    }
    if (isChecked) {
      selectedIds = checkboxes.map(checkbox => "#" + checkbox.id)
    } else {
      selectedIds = []
    }
    
    saveSelectedItems(selectedIds)
    itemsQuantity.innerHTML = isChecked ? "3" : "0"
}
selectAll.addEventListener('click', selectAllItems);
checkboxes.forEach(checkbox => {
  checkbox.addEventListener("click", e => {
    const checked = e.target.checked
    const id = "#" + e.target.id

    if (checked) {
      selectedIds.push(id)
    } else {
      selectedIds = selectedIds.filter(el => el !== id)
    }

    saveSelectedItems(selectedIds)
    itemsQuantity.innerHTML = String(selectedIds.length)
    selectAll.checked = selectedIds.length === checkboxIds.length
  })
})


for(let product of document.querySelectorAll(".chosen-product")){
    product.addEventListener("click",function(event){
      let target = event.target;
      if(target.closest(".delete")){
        this.classList.add("display-none")
      }  
    })
  }
